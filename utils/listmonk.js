const fs = require('fs');
const { marked } = require('marked');
const { JSDOM } = require('jsdom');

const sentCampaignsFile = './sent-campaigns.json';

// Load sent campaigns
function getSentCampaigns() {
    if (!fs.existsSync(sentCampaignsFile)) {
        fs.writeFileSync(sentCampaignsFile, JSON.stringify([])); // Create file if it doesn't exist
    }
    return JSON.parse(fs.readFileSync(sentCampaignsFile));
}

// Save sent campaigns
function saveSentCampaigns(sentCampaigns) {
    fs.writeFileSync(sentCampaignsFile, JSON.stringify(sentCampaigns, null, 2));
}

// Check and send campaign
async function checkAndSendCampaign(post) {
    const sentCampaigns = getSentCampaigns();

    if (sentCampaigns.includes(post.title)) {
        console.log(`Campaign already sent for: ${post.title}`);
        return; // Skip if already sent
    }
    
    console.log(`Creating campaign for: ${post.title}`);
    await createListmonkCampaign(post); // Send campaign
    sentCampaigns.push(post.title); // Add to sent list
    saveSentCampaigns(sentCampaigns); // Update the list
}

function extractFrontMatter(content) {
    const match = /---\n([\s\S]*?)\n---/.exec(content); // Extract YAML frontmatter
    const body = content.replace(/---\n[\s\S]*?\n---/, '').trim(); // Extract body

    const metadata = {};
    if (match && match[1]) {
        match[1].split('\n').forEach(line => {
            const colonIndex = line.indexOf(':'); // Find first colon only
            if (colonIndex !== -1) {
                const key = line.substring(0, colonIndex).trim(); // Key before colon
                const value = line.substring(colonIndex + 1).trim(); // Value after colon
                metadata[key] = value; // Store in metadata object
            }
        });
    }

    metadata.content = body; // Add body content
    return metadata;
}

async function createListmonkCampaign(post) {
    const url = process.env.LISTMONK_URL; // Replace with your Listmonk URL
    const apiKey = process.env.LISTMONK_API_KEY; // Replace with your API key
    const apiUser = process.env.LISTMONK_API_USER;
    const baseUrl = 'https://www.fronteers.nl'; // Base URL for links

    let htmlContent = marked(post.content);

    // Step 2: Rewrite relative links to full links
    const dom = new JSDOM(htmlContent); // Create a DOM instance
    const document = dom.window.document;

    // Process all <a> tags for 'href'
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http')) {
            link.setAttribute('href', new URL(href, baseUrl).href); // Resolve relative link
        }
    });

    // Process all <img> tags for 'src'
    document.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http')) {
            img.setAttribute('src', new URL(src, baseUrl).href); // Resolve relative image source
        }
    });

    // Convert DOM back to HTML
    htmlContent = dom.serialize();

    const payload = {
        name: post.title,
        subject: post.title,
        content_type: 'html',
        body: `<h1>${post.title}</h1><p>${htmlContent}</p>`, // Email content
        type: 'regular',
        lists: [1], // Replace with your list ID
    };

    // console.log('Campaign Payload:', JSON.stringify(payload, null, 2)); // Log the payload

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                Authorization: `token ${apiUser}:${apiKey}`, 
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
        console.log('Campaign Created:', data);
    } catch (error) {
        console.error('Error creating campaign:', error);
    }
}

// Export functions
module.exports = {
    extractFrontMatter,
    checkAndSendCampaign,
};

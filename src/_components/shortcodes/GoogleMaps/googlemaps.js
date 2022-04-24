exports.googlemaps = (address) => {
    // console.log(`https://www.google.com/maps/place/${address}/`);
    
    return `<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.openstreetmap.org/search?query=${address}" data-iframely-url="//cdn.iframe.ly/YcMNcy1"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>`
};

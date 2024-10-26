document.addEventListener('DOMContentLoaded', function() {
    const emailButton = document.getElementById('emailButton');
        
    if (emailButton) {
        emailButton.hidden = false;

        document.getElementById('emailButton').addEventListener('click', function () {
            const form = document.querySelector('main form');
            const inputs = form.querySelectorAll('input, textarea');
            let bodyContent = "";
            let abortSend = false;  // Flag to determine if the form should be aborted

            inputs.forEach((input) => {
                const label = form.querySelector(`label[for="${input.id}"]`);
                const labelText = label ? getTextWithoutChildTags(label) : input.name;
                let value = "Niet ingevuld";

                const isBotField = input.name === 'bot-field';  // Check by the name attribute
                const inputLeftEmpty = input.value === '';

                // If it's the bot field and it is filled, we abort the form submission
                if (isBotField && !inputLeftEmpty) {
                    abortSend = true;  // Set flag to true if bot field is filled
                }

                // Process other fields that are not the bot field
                if (!isBotField) {
                    if (!inputLeftEmpty) {
                        value = encodeURIComponent(input.value);
                    }
                    bodyContent += `${labelText}:\n ${value}\n\n`;
                }
            });

            // If abortSend is true, do not proceed with sending the email
            if (abortSend) {
                alert("Invalid submission detected. Please try again.");
                return;  // Stop further execution and prevent the mailto link from opening
            }

            // Construct the mailto link if everything is okay
            const subject = encodeURIComponent("Iemand wil graag lid worden");
            const mailtoLink = `mailto:penningmeester@fronteers.nl?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

            // Open the mailto link
            window.location.href = mailtoLink;
        });

        // Function to get text content excluding any child HTML tags (like <em>)
        function getTextWithoutChildTags(element) {
            let text = '';
            element.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    text += node.textContent.trim() + ' ';
                }
            });
            return text.trim();
        }
    }
});

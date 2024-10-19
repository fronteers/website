document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('load-on-javascript').removeAttribute('hidden');

  if (!document.getElementById('load-on-javascript').hasAttribute('hidden')) {
    const navToggle = document.getElementById('navigation-toggle');
    const navigationPanel = document.getElementById('navigation');
    const focusableElementsString = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    function handleInteraction() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('navigation-opened');
        document.body.classList.add('navigation-closed');
      } else {
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.classList.remove('navigation-closed');
        document.body.classList.add('navigation-opened');
        trapFocus(navigationPanel, navToggle);
        navigationPanel.focus();
      }
    }
      
    function trapFocus(element, triggerButton) {
        // Create a list of focusable elements, including the triggerButton
        const focusableElements = [
            triggerButton,
            ...element.querySelectorAll(focusableElementsString),
        ];

        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        function handleKeydown(event) {
            const isTabPressed = (event.key === 'Tab' || event.keyCode === 9);
            if (!isTabPressed) return;

            if (event.shiftKey) {
                // If Shift + Tab, go to the last focusable element when on the first
                if (document.activeElement === firstFocusableElement) {
                    event.preventDefault();
                    lastFocusableElement.focus();
                }
            } else {
                // If Tab, go to the first focusable element when on the last
                if (document.activeElement === lastFocusableElement) {
                    event.preventDefault();
                    firstFocusableElement.focus();
                }
            }
        }

        // Ensure the keydown listener is not added multiple times
        element.removeEventListener('keydown', handleKeydown);
        element.addEventListener('keydown', handleKeydown);

        // Focus the first element when the menu opens
        firstFocusableElement.focus();
    }

    navToggle.addEventListener('click', handleInteraction);
  }

    // Allow users to open submenu items
    // Select all top-level navigation items
    const submenuToggle = document.querySelectorAll('.navigation-submenu-toggle');

    submenuToggle.forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
            const parentLi = toggle.parentElement;
            // const submenuToggle = parentLi.querySelector('.navigation-submenu-toggle');
            // const submenu = parentLi.querySelector('.navigation-list--sublevel');
            const submenuIsExpanded = toggle.getAttribute('aria-expanded') === 'true';

            // If the submenu exists 
            if (submenuIsExpanded) {
                toggle.setAttribute('aria-expanded', 'false');
                parentLi.classList.remove('open'); // Remove 'open' class
            } else {
                toggle.setAttribute('aria-expanded', 'true');
                parentLi.classList.add('open'); // Add 'open' class to toggle ::after styles
            }
        });
    });

});

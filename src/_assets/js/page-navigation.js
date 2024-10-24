document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('load-on-javascript').removeAttribute('hidden');
  const focusableElementsString = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function trapFocus(element, triggerButton) {
    // Create a list of focusable elements, including the triggerButton
    const focusableElements = [
      triggerButton,
      ...element.querySelectorAll(focusableElementsString),
    ];
    console.log(focusableElements);

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

  if (!document.getElementById('load-on-javascript').hasAttribute('hidden')) {
    const navToggle = document.getElementById('navigation-toggle');
    const navigationPanel = document.getElementById('navigation');
    
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
      
    navToggle.addEventListener('click', handleInteraction);
  }

  // Allow users to open submenu items
    // Allow users to open submenu items
    const submenuToggle = document.querySelectorAll('.navigation-submenu-toggle');

    submenuToggle.forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
            const parentLi = toggle.parentElement;
            const submenuIsExpanded = toggle.getAttribute('aria-expanded') === 'true';

            // Close all other open submenus before opening a new one
            submenuToggle.forEach(function (otherToggle) {
                const otherParentLi = otherToggle.parentElement;

                // If it's not the clicked submenu, close it
                if (otherToggle !== toggle) {
                    otherToggle.setAttribute('aria-expanded', 'false');
                    otherToggle.setAttribute('aria-labelledby', 'openSubmenuLabel');
                    otherParentLi.classList.remove('open');
                }
            });

            // Toggle the clicked submenu
            if (submenuIsExpanded) {
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-labelledby', 'openSubmenuLabel');
                parentLi.classList.remove('open');
            } else {
                toggle.setAttribute('aria-expanded', 'true');
                parentLi.classList.add('open');
                toggle.setAttribute('aria-labelledby', 'closeSubmenuLabel');
                trapFocus(parentLi, toggle);
            }
        });
    });

});

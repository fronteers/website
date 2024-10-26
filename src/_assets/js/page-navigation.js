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

    const submenuToggle = document.querySelectorAll('.navigation-submenu-toggle');
    const headerLinks = document.querySelectorAll('.page-navigation--header .navigation-list-item--toplevel > a');
    const footerLinks = document.querySelectorAll('.page-navigation--footer .navigation-list-item--toplevel > a');
    const navigation = document.querySelector('.page-navigation');

    // Function to handle wide screen behavior
    function handleWideScreens() {
        if (window.innerWidth > 900) {
            // Set tabindex to -1 for all submenu toggles
            submenuToggle.forEach(function (toggle) {
                toggle.setAttribute('tabindex', '-1');
            });

            // Add keyboard navigation for header and footer sections separately
            addArrowKeyNavigation(headerLinks);
            addArrowKeyNavigation(footerLinks);

        } else {
            // Make sure submenu toggles are tabbable again for mobile
            submenuToggle.forEach(function (toggle) {
                toggle.removeAttribute('tabindex');
            });
        }
    }

    // Add navigation with arrow keys inside a specific set of links (header or footer)
    function addArrowKeyNavigation(links) {
        links.forEach(function (link, index) {
            link.addEventListener('keydown', function (event) {
                const parentLi = link.parentElement;
                const toggleButton = parentLi.querySelector('.navigation-submenu-toggle');
                const submenuItems = parentLi.querySelectorAll('.navigation-list-item--sublevel a');

                if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    closeAllSubmenus();

                    // Open submenu and focus on first item
                    if (toggleButton && !parentLi.classList.contains('open')) {
                        toggleButton.setAttribute('aria-expanded', 'true');
                        parentLi.classList.add('open');
                        submenuItems[0]?.focus(); // Focus on the first submenu item
                    }
                } else if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    closeAllSubmenus();

                    // Open submenu and focus on last item
                    if (toggleButton && !parentLi.classList.contains('open')) {
                        toggleButton.setAttribute('aria-expanded', 'true');
                        parentLi.classList.add('open');
                        submenuItems[submenuItems.length - 1]?.focus(); // Focus on the last submenu item
                    }
                } else if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    if (index > 0) {
                        // Move focus to the previous link within the same section
                        links[index - 1].focus();
                        closeAllSubmenus(); // Do not wrap to the other section (e.g., footer)
                    }
                } else if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    if (index < links.length - 1) {
                        // Move focus to the next link within the same section
                        links[index + 1].focus();
                        closeAllSubmenus(); // Do not wrap to the other section (e.g., footer)
                    }
                } else if (event.key === 'Escape') {
                    closeAllSubmenus();
                    link.focus(); // Refocus on the top-level link after closing submenu
                }
            });
        });
    }

    // Add navigation with up and down arrow keys inside submenu
    function addSubmenuNavigation() {
        const sublevelLinks = document.querySelectorAll('.navigation-list-item--sublevel > a');
        sublevelLinks.forEach(function (subLink) {
            subLink.addEventListener('keydown', function (event) {
                const subMenuItems = Array.from(subLink.closest('ul').querySelectorAll('a'));
                const currentIndex = subMenuItems.indexOf(subLink);

                if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    const nextIndex = (currentIndex + 1) % subMenuItems.length;
                    subMenuItems[nextIndex].focus();
                } else if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    const prevIndex = (currentIndex - 1 + subMenuItems.length) % subMenuItems.length;
                    subMenuItems[prevIndex].focus();
                } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                    event.preventDefault();
                    const parentLi = subLink.closest('.navigation-list-item--toplevel');
                    const topLevelLink = parentLi.querySelector('a');
                    topLevelLink.focus(); // Focus back to the main top-level link
                } else if (event.key === 'Escape') {
                    closeAllSubmenus();
                    subLink.closest('.navigation-list-item--toplevel').querySelector('a').focus(); // Refocus on top-level link
                }
            });
        });
    }

    // Helper function to open submenu for a given top-level link
    function openSubmenu(toplevelLink, focusLast = false) {
        const parentLi = toplevelLink.parentElement;
        const toggleButton = parentLi.querySelector('.navigation-submenu-toggle');
        const submenuItems = parentLi.querySelectorAll('.navigation-list-item--sublevel a');

        if (toggleButton && !parentLi.classList.contains('open')) {
            closeAllSubmenus(); // Close any other open submenus
            toggleButton.setAttribute('aria-expanded', 'true');
            parentLi.classList.add('open');
            if (submenuItems.length > 0) {
                submenuItems[focusLast ? submenuItems.length - 1 : 0].focus(); // Focus on the first or last submenu item
            }
        }
    }

    // Function to close all submenus
    function closeAllSubmenus() {
        submenuToggle.forEach(function (toggle) {
            const parentLi = toggle.parentElement;
            toggle.setAttribute('aria-expanded', 'false');
            parentLi.classList.remove('open');
        });
    }

    // Close submenus when clicking outside the navigation
    document.addEventListener('click', function (event) {
        if (!navigation.contains(event.target)) {
            closeAllSubmenus();
        }
    });

    // Close submenus when pressing the Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeAllSubmenus();
        }
    });

    // Call the function on page load
    handleWideScreens();
    addSubmenuNavigation();

    // Re-run when window is resized
    window.addEventListener('resize', handleWideScreens);
});


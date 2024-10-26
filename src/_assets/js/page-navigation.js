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
  const toplevelLinks = document.querySelectorAll('.navigation-list-item--toplevel > a');
  const navigation = document.querySelector('.page-navigation');

  // Function to handle wide screen behavior
  function handleWideScreens() {
    if (window.innerWidth > 961) {
      // Set tabindex to -1 for all submenu toggles
      submenuToggle.forEach(function (toggle) {
        toggle.setAttribute('tabindex', '-1');
      });

      // Add keyboard navigation with arrow keys on top-level links
      toplevelLinks.forEach(function (link, index) {
        link.addEventListener('keydown', function (event) {
          const parentLi = link.parentElement;
          const toggleButton = parentLi.querySelector('.navigation-submenu-toggle');

          if (event.key === 'ArrowDown') {
            event.preventDefault();
            closeAllSubmenus();

            // Open submenu if it has one
            if (toggleButton && !parentLi.classList.contains('open')) {
              toggleButton.setAttribute('aria-expanded', 'true');
              parentLi.classList.add('open');
              const firstSubmenuItem = parentLi.querySelector('.navigation-list-item--sublevel a');
              if (firstSubmenuItem) {
                firstSubmenuItem.focus();
              }
            }
          } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            if (index > 0) {
              // Move focus to the previous top-level link and open its submenu
              toplevelLinks[index - 1].focus();
              openSubmenu(toplevelLinks[index - 1]);
            }
          } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            if (index < toplevelLinks.length - 1) {
              // Move focus to the next top-level link and open its submenu
              toplevelLinks[index + 1].focus();
              openSubmenu(toplevelLinks[index + 1]);
            }
          }
        });
      });

      // Add navigation with up and down arrow keys inside submenu
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
          } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            const parentLi = subLink.closest('.navigation-list-item--toplevel');
            const currentTopLevelIndex = Array.from(toplevelLinks).indexOf(parentLi.querySelector('a'));
            if (currentTopLevelIndex > 0) {
              toplevelLinks[currentTopLevelIndex - 1].focus();
              openSubmenu(toplevelLinks[currentTopLevelIndex - 1]);
            }
          } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            const parentLi = subLink.closest('.navigation-list-item--toplevel');
            const currentTopLevelIndex = Array.from(toplevelLinks).indexOf(parentLi.querySelector('a'));
            if (currentTopLevelIndex < toplevelLinks.length - 1) {
              toplevelLinks[currentTopLevelIndex + 1].focus();
              openSubmenu(toplevelLinks[currentTopLevelIndex + 1]);
            }
          }
        });
      });

    } else {
      // Make sure submenu toggles are tabbable again for mobile
      submenuToggle.forEach(function (toggle) {
        toggle.removeAttribute('tabindex');
      });
    }
  }

  // Helper function to open submenu for a given top-level link
  function openSubmenu(toplevelLink) {
    const parentLi = toplevelLink.parentElement;
    const toggleButton = parentLi.querySelector('.navigation-submenu-toggle');

    if (toggleButton && !parentLi.classList.contains('open')) {
      closeAllSubmenus(); // Close any other open submenus
      toggleButton.setAttribute('aria-expanded', 'true');
      parentLi.classList.add('open');
      const firstSubmenuItem = parentLi.querySelector('.navigation-list-item--sublevel a');
      if (firstSubmenuItem) {
        firstSubmenuItem.focus();
      }
    }
  }

  // Call the function on page load
  handleWideScreens();

  // Re-run when window is resized
  window.addEventListener('resize', handleWideScreens);

  // Existing click toggle logic (no changes needed here)
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
          otherParentLi.classList.remove('open');
        }
      });

      // Toggle the clicked submenu
      if (submenuIsExpanded) {
        toggle.setAttribute('aria-expanded', 'false');
        parentLi.classList.remove('open');
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        parentLi.classList.add('open');
        const firstSubmenuItem = parentLi.querySelector('.navigation-list-item--sublevel a');
        if (firstSubmenuItem) {
          firstSubmenuItem.focus();
        }
      }
    });
  });

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
});


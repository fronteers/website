/**
 * Activity category filter functionality
 * Filters activity items based on selected category checkboxes
 */
(function() {
  'use strict';

  const filterContainer = document.querySelector('[data-activity-filters]');
  const activityList = document.querySelector('[data-activity-list]');
  
  if (!filterContainer || !activityList) {
    return; // Exit if required elements don't exist
  }

  const checkboxes = filterContainer.querySelectorAll('input[type="checkbox"]');
  const activityItems = activityList.querySelectorAll('[data-activity-item]');
  const filterAllCheckbox = filterContainer.querySelector('[data-filter-all]');
  const selectionShownElement = document.querySelector('[data-selection-shown]');

  /**
   * Update the count of shown activities
   */
  function updateShownCount() {
    if (!selectionShownElement) {
      return;
    }

    // Count visible items (not hidden)
    let visibleCount = 0;
    activityItems.forEach(item => {
      if (item.style.display !== 'none') {
        visibleCount++;
      }
    });

    selectionShownElement.textContent = visibleCount;
  }

  /**
   * Filter activities based on selected categories
   */
  function filterActivities() {
    const selectedCategories = new Set();
    let allSelected = false;

    // Collect selected categories
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        if (checkbox === filterAllCheckbox) {
          allSelected = true;
        } else {
          selectedCategories.add(checkbox.value);
        }
      }
    });

    // If "all" is selected, show all items
    if (allSelected) {
      activityItems.forEach(item => {
        item.style.display = '';
      });
      updateShownCount();
      return;
    }

    // If no categories selected, hide all
    if (selectedCategories.size === 0) {
      activityItems.forEach(item => {
        item.style.display = 'none';
      });
      updateShownCount();
      return;
    }

    // Filter items based on selected categories
    activityItems.forEach(item => {
      // Get all data-category-* attributes from the item itself
      const itemCategories = Array.from(item.attributes)
        .filter(attr => attr.name.startsWith('data-category-'))
        .map(attr => attr.name.replace('data-category-', ''));

      // Check if item has any of the selected categories
      const hasSelectedCategory = itemCategories.some(cat => selectedCategories.has(cat));

      if (hasSelectedCategory) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });

    updateShownCount();
  }

  /**
   * Handle "all" checkbox behavior
   */
  function handleAllCheckbox() {
    if (filterAllCheckbox.checked) {
      // Uncheck all other checkboxes
      checkboxes.forEach(checkbox => {
        if (checkbox !== filterAllCheckbox) {
          checkbox.checked = false;
        }
      });
    } else {
      // When "all" is unchecked, uncheck all category checkboxes
      checkboxes.forEach(checkbox => {
        if (checkbox !== filterAllCheckbox) {
          checkbox.checked = false;
        }
      });
    }
  }

  /**
   * Handle individual category checkbox behavior
   */
  function handleCategoryCheckbox(checkbox) {
    if (checkbox.checked && checkbox !== filterAllCheckbox) {
      // Uncheck "all" if a specific category is selected
      if (filterAllCheckbox) {
        filterAllCheckbox.checked = false;
      }
    }

    // If no checkboxes are selected, check "all"
    const anyChecked = Array.from(checkboxes).some(cb => cb.checked && cb !== filterAllCheckbox);
    if (!anyChecked && filterAllCheckbox) {
      filterAllCheckbox.checked = true;
    }
  }

  // Add event listeners
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this === filterAllCheckbox) {
        handleAllCheckbox();
      } else {
        handleCategoryCheckbox(this);
      }
      filterActivities();
    });
  });

  // Initial filter on page load
  filterActivities();
})();

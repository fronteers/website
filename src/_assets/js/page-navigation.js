document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('load-on-javascript').removeAttribute('hidden');

  if (!document.getElementById('load-on-javascript').hasAttribute('hidden')) {
    const navToggle = document.getElementById('navigation-toggle');
    
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
      }
    }

    navToggle.addEventListener('click', handleInteraction);
  }
});

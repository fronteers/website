document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('load-on-javascript').removeAttribute('hidden');


  if (!document.getElementById('load-on-javascript').hasAttribute('hidden')) {
    const openToggle = document.getElementById('navigation-open');
    const closeToggle = document.getElementById('navigation-close');
      
    function handleInteraction() {
      if (document.body.classList.contains('navigation-opened')) {
        document.body.classList.remove('navigation-opened');
        document.body.classList.add('navigation-closed');
      } else {
        document.body.classList.add('navigation-opened');
        document.body.classList.remove('navigation-closed');
      }
    }

    openToggle.addEventListener('click', handleInteraction);
    closeToggle.addEventListener('click', handleInteraction);
  }
});

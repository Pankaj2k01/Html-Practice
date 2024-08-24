nav.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    nav.classList.remove('show');
  });
});

// Scroll reveal. Content stays visible if this file never loads.
document.documentElement.classList.add('js');

(function () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  function showAll() {
    for (var i = 0; i < els.length; i++) els[i].classList.add('in');
  }

  if (!('IntersectionObserver' in window)) {
    showAll();
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.08 }
  );

  for (var i = 0; i < els.length; i++) io.observe(els[i]);
})();

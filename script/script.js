// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add('navbarDark');
  } else {
    header.classList.remove('navbarDark');
  }
};

/**
 * Skills animation
 */
let skilsContent = select('.skills-content');
if (skilsContent) {
  new Waypoint({
    element: skilsContent,
    offset: '80%',
    handler: function (direction) {
      let progress = select('.progress .progress-bar', true);
      progress.forEach((el) => {
        el.style.width = el.getAttribute('aria-valuenow') + '%';
      });
    },
  });
}

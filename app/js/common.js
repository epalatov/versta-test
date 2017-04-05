$(function() {


});

window.sr = ScrollReveal();
sr.reveal('.offer__title', {
  origin: 'bottom',
  scale: 1,
  distance: '100px',
  duration: 1000,
  easing: 'cubic-bezier(.31,.05,.18,.99)'
}).reveal('.offer__subtitle', {
  origin: 'bottom',
  scale: 1,
  delay: 300,
  distance: '50px',
  duration: 1000,
  easing: 'cubic-bezier(.31,.05,.18,.99)'
});

sr.reveal('.for-whom__content', {
  viewFactor: 1,
  viewOffset: { top: 20 },
  origin: 'bottom',
  scale: 1,
  distance: '80px',
  duration: 1000,
  easing: 'cubic-bezier(.31,.05,.18,.99)'
});

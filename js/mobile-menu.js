// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Закрываем мобильное меню на более широких экранах
//   // в случае изменения ориентации устройства.
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();

const refs = {
  burgerBtn: document.querySelector('.js-open-menu'),
  closeBtn: document.querySelector('.js-close-menu'),
  mobileMenu: document.querySelector('.js-menu-container'),
  backdrop: document.querySelector('.backdrope'),
  modalLink: document.querySelectorAll('.mobile-menu__link'),
};
refs.burgerBtn.addEventListener('click', onButtonClick);
refs.closeBtn.addEventListener('click', onButtonClick);
refs.modalLink.forEach(link => link.addEventListener('click', onButtonClick));
function onButtonClick(e) {
  document.body.classList.toggle('bg-scrolling-element-when-mobile-open');
  refs.backdrop.classList.toggle('is-hidden');
  refs.mobileMenu.classList.toggle('mobile-open');
}
window.addEventListener('click', onBackdropClick);
function onBackdropClick(e) {
  if (e.target.classList.contains('backdrope')) {
    onButtonClick();
    refs.mobileMenu.classList.remove('mobile-open');
  }
}

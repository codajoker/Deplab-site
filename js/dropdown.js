const refss = {
  navLink: document.querySelector('.nav__dropdown'),
  dropdown: document.querySelector('.dropdown__wrapper'),
};

refss.navLink.addEventListener('mouseenter', onNavLinkHover);
refss.navLink.addEventListener('focusin', onNavLinkHover);
refss.navLink.addEventListener('mouseleave', onNavLinkOut);
refss.navLink.addEventListener('focusout', onNavLinkOut);

function onNavLinkHover(e) {
  refss.dropdown.classList.add('dropdown-is-open');
}

function onNavLinkOut() {
  refss.dropdown.classList.remove('dropdown-is-open');
}

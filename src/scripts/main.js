'use strict';

const iconMenu = document.querySelector('.icon--menu');
const navLinks = document.querySelectorAll('.nav__link');
const iconClose = document.querySelector('.icon--close');

iconMenu.addEventListener('click', () => {
  document.body.classList.add('page__body--menu-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('page__body--menu-open');
  });
});

iconClose.addEventListener('click', () => {
  document.body.classList.remove('page__body--menu-open');
});

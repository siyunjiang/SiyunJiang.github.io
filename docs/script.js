const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');

menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

const lightbox = document.querySelector('#photo-lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxLabel = lightbox.querySelector('.lightbox-frame span');

document.querySelectorAll('.gallery-open').forEach((button) => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxLabel.textContent = button.querySelector('span').textContent;
    lightbox.showModal();
  });
});

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

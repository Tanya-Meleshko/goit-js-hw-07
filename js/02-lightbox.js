import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryUlEl = document.querySelector('.gallery');

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');

galleryUlEl.insertAdjacentHTML('beforeend', markupGallery);

new SimpleLightbox('.gallery .gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

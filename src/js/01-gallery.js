import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryDivEl = document.querySelector('.gallery');

const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');

galleryDivEl.insertAdjacentHTML('beforeend', markupGallery);

console.log(galleryDivEl);

//Реализация делегирования на div.gallery и получение url большого изображения.

galleryDivEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `
        <img src="${event.target.dataset.source}" width="800" height="600">
    `,
    {
      onShow: () => document.addEventListener('keydown', onEscBtnPress),
      onClose: () => document.removeEventListener('keydown', onEscBtnPress),
    }
  );

  instance.show();

  function onEscBtnPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
  console.log('event.target :>> ', event.target);
  console.log('event.currentTarget :>> ', event.currentTarget);
}

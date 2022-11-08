import 'simplelightbox/dist/simple-lightbox.min.css';
import basicLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} data-source=${original} alt=${description} />
 </a>;
</div>`;
    })
    .join('');
}
let instance;

gallery.innerHTML = createMarkup();
gallery.addEventListener('click', onZoom);

function onZoom(event) {
  event.preventDefault();
  const {
    target: {
      dataset: { source },
    },
  } = event;

  document.addEventListener('keydown', onClose);
}

function onClose(e) {
  if (e.code === 'Escape') {
    document.removeEventListener('keydown', onClose);
  }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});

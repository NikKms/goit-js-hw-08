// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('beforeend', itemOfGallery(galleryItems));

function itemOfGallery(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
         <a class="gallery__link" href=${original}>
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionsDelay: 250,
});

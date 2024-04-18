
import { onSearch } from './js/pixabay-api';
import { createGalleryMarkup } from './js/render-functions';

const form = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');

form.addEventListener('submit', onSubmit);
loader.hidden = true;

function onSubmit(event) {
  event.preventDefault();
  galleryList.innerHTML = '';
  loader.hidden = false;
  const { searchRequest } = event.currentTarget.elements;
  let searchQuery = searchRequest.value;
  onSearch(searchQuery);
  
  form.reset();
  
}

loadBtn.addEventListener('click', loadMore);

async function loadMore() {
  page += 1;
  loadBtn.disabled = true;
  
  loader.hidden = true;
  try {
    const data = await onSearch(searchQuery, (page = 1));
    galleryList.insertAdjacentHTML(
      'beforeend',
      createGalleryMarkup(data.results)
    );
    loader.hidden = true;

    loadBtn.hidden = false;

    const card = document.querySelector('.gallery-card');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    if (data.page >= 500) {
      loader.hidden = true;
    }
  } catch (error) {
    alert(error.message);
  
  } finally {
    loader.hidden = true;
  }

}


import { onSearch } from './js/pixabay-api';
import { createGalleryMarkup } from './js/render-functions';

const form = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');

form.addEventListener('submit', onSubmit);
loader.hidden = true;
loadBtn.hidden = true;

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
  scrollToNewCards();
  loader.hidden = true;
  try {
    const data = await onSearch(searchQuery, (page = 1));
    galleryList.insertAdjacentHTML(
      'beforeend',
      createGalleryMarkup(data.results)
    );
    loader.hidden = true;
    
    loadBtn.hidden = false;
    loadBtn.disabled = false; 
    const card = document.querySelector('.gallery-card');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    if (data.page >= page.totalPa) {
      
      loadBtn.hidden = true;
    }
  } catch (error) {
    alert(error.message);
  
  } finally {
    loader.hidden = true;
  }

}


function getCardHeight() {
  const firstCard = document.querySelector('.gallery-card');
  if (firstCard) {
    const cardRect = firstCard.getBoundingClientRect();
    return cardRect.height;
  }
  return 0;
}

function scrollToNewCards() {
  const cardHeight = getCardHeight();
  if (cardHeight > 0) {
    window.scrollBy(0, cardHeight * 2);
  }
}
import axios from 'axios';

const API_KEY = '43230635-158e2f6795128fbec19d81d21';
const BASE_URL = 'https://pixabay.com/api/';

async function onSearch(searchQuery, currentPage) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  });
  const response = await axios.get(`${BASE_URL}?${searchParams}`);
  return response.data;
}
export { onSearch };

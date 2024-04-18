import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/styles.css';
import axios from 'axios';

import { createGalleryMarkup } from './render-functions';

const KEY_API = '43230635-158e2f6795128fbec19d81d21';
const URL = 'https://pixabay.com/api/';

let page = 1;

export async function onSearch(searchQuery, page = 1) {
  try {
    const { data } = await axios(`${URL}`, {
      params: {
        key: KEY_API,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page
      },
    });

    if (!data.total) {
      iziToast.error({
        title: 'Error',
        position: 'center',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    createGalleryMarkup(data.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message: 'Failed to fetch images. Please try again later.',
    });
  }
}

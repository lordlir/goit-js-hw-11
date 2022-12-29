import axios from 'axios';

const KEY = '32440929-cc1adcbe77972722d22b2e7bd';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetch(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}

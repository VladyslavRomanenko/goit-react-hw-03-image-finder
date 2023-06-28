import axios from 'axios';

const searchGalleryApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

const KEY = '36218076-8e9a49d554f80cd792785c055';

export const getGallery = async (value, page) => {
  value = value || 'dog';
  try {
    const response = await searchGalleryApi.get('', {
      params: {
        q: value,
        page: page,
        key: KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

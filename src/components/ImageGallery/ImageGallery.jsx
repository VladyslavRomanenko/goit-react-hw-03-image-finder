import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.gallery}>
      {photos.map(photo => (
        <ImageGalleryItem key={photo.id} photo={photo}></ImageGalleryItem>
      ))}
    </ul>
  );
};

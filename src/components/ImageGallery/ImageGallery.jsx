import css from './ImageGallery.module.css';
import img from '../../images/no-img.jpg';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
export class ImageGallery extends Component {
  render() {
    const { photos } = this.props;
    if (!photos.length) {
      return (
        <>
          <img className={css.image} src={img} alt="NO IMAGE" />
        </>
      );
    }
    return (
      <ul className={css.gallery}>
        {photos.map(photo => (
          <ImageGalleryItem key={photo.id} photo={photo}></ImageGalleryItem>
        ))}
      </ul>
    );
  }
}

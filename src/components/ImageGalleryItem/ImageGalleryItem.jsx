import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  render() {
    const { photo } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <li className={css.galleryItem} onClick={this.toggleModal}>
          <img
            className={css.galleryItemImage}
            src={photo.webformatURL}
            alt="photo"
          />
        </li>
        {isOpen ? (
          <Modal img={photo.largeImageURL} onClose={this.toggleModal}></Modal>
        ) : null}
      </>
    );
  }
}

import { Component } from 'react';
import css from './Modal.module.css';
export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('click', this.handleBackdropClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    // document.removeEventListener('click', this.handleBackdropClick);
  }

  handleKeydown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { img } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={img} alt="card" />
        </div>
      </div>
    );
  }
}

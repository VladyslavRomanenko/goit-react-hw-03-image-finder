import { Component } from 'react';
import css from './Button.module.css';
export class Button extends Component {
  render() {
    const { handleLoadMore } = this.props;
    return (
      <>
        <button className={css.btn} onClick={handleLoadMore}>
          Load more
        </button>
      </>
    );
  }
}

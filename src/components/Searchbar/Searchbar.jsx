import css from './Searchbar.module.css';
import iconSearch from '../../images/icons.svg';
import { Component } from 'react';
import PropTypes from 'prop-types';
export class Searchbar extends Component {
  render() {
    const { value, onChangeValue, onSubmitValue } = this.props;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={onSubmitValue}>
          <button type="submit" className={css.SearchFormBtn}>
            <svg className={css.icon} width="20" height="20">
              <use xlinkHref={`${iconSearch}#icon-search`}></use>
            </svg>
          </button>
          <input
            onChange={onChangeValue}
            value={value}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  onSubmitValue: PropTypes.func.isRequired,
};

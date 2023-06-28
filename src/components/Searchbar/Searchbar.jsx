import css from './Searchbar.module.css';
import iconSearch from '../../images/icons.svg';
import { Component } from 'react';
import PropTypes from 'prop-types';
export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChangeValue = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    const { onSubmitValue } = this.props;
    e.preventDefault();
    onSubmitValue(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormBtn}>
            <svg className={css.icon} width="20" height="20">
              <use xlinkHref={`${iconSearch}#icon-search`}></use>
            </svg>
          </button>
          <input
            onChange={this.handleChangeValue}
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
  onSubmitValue: PropTypes.func.isRequired,
};

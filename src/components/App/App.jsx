import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { Button } from 'components/Button/Button';
import { getGallery } from 'service/api';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    value: '', //search
    searchValue: '', //searchbar UI
    photos: [],
    page: 1,
    loading: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(_, prevState) {
    if (this.state.page !== prevState.page) {
      this.fetchData();
    }
  }

  handleChangeValue = e => {
    this.setState({
      value: e.target.value,
      searchValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      photos: [],
    });
    this.fetchData();
    this.setState({
      searchValue: '',
    });
  };

  handleLoadMore = e => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  fetchData = async () => {
    this.setState({
      loading: true,
    });

    try {
      const data = await getGallery(this.state.value, this.state.page);
      this.setState({ photos: [...this.state.photos, ...data] });
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <Searchbar
          onSubmitValue={this.handleSubmit}
          onChangeValue={this.handleChangeValue}
          value={this.state.searchValue}
        />
        <ImageGallery photos={this.state.photos} />
        {this.state.loading ? (
          <Loader></Loader>
        ) : (
          this.state.photos.length > 0 && (
            <Button handleLoadMore={this.handleLoadMore} />
          )
        )}
      </>
    );
  }
}

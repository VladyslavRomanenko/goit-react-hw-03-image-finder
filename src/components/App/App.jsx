import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { Button } from 'components/Button/Button';
import { getGallery } from 'service/api';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    value: '', //search
    photos: [],
    page: 1,
    loading: false,
    showBtn: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(_, prevState) {
    const { value, page } = this.state;
    if (page !== prevState.page || value !== prevState.value) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    this.setState({
      loading: true,
    });
    try {
      const data = await getGallery(this.state.value, this.state.page);
      this.setState(prevState => ({
        photos: [...prevState.photos, ...data.hits],
        showBtn: this.state.page < Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  onSubmitQuery = value => {
    this.setState({
      value,
      photos: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { photos, loading, showBtn } = this.state;
    return (
      <>
        <Searchbar onSubmitValue={this.onSubmitQuery} />
        <ImageGallery photos={photos} />
        {loading ? (
          <Loader />
        ) : (
          showBtn && <Button handleLoadMore={this.handleLoadMore} />
        )}
      </>
    );
  }
}

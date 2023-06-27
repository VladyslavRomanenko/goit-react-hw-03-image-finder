import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import axios from 'axios';
axios.defaults.baseURL = '';
export class App extends Component {
  render() {
    return (
      <div>
        <Searchbar></Searchbar>
        <ImageGallery></ImageGallery>
      </div>
    );
  }
}

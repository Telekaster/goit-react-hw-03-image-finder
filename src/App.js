import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

class App extends Component {
  state = {
    value: "",
    page: 1,
    images: [],
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  searchImages = (e) => {
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=23539275-fb90155ac37cf87d4395ca2a5&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => {
        return this.setState({ images: response.data.hits });
      });
  };

  // componentDidUpdate(prevState) {}

  render() {
    return (
      <>
        <Searchbar
          onChange={this.handleChange}
          onClick={this.searchImages}
          state={this.state}
        />
        <ImageGallery state={this.state} />
      </>
    );
  }
}

export default App;

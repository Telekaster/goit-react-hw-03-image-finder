import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    value: "",
    page: 1,
    images: [],
    loaded: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  searchImages = (e) => {
    this.setState({ images: [], page: 1, loaded: false });

    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=23539275-fb90155ac37cf87d4395ca2a5&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => {
        return this.setState({ images: response.data.hits, loaded: true });
      });
  };

  loadMoreImages = () => {
    const page = this.state.page;
    this.setState({ page: page + 1 });
    const oldState = this.state.images;

    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=23539275-fb90155ac37cf87d4395ca2a5&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => {
        return this.setState({ images: [...oldState, ...response.data.hits] });
      });
  };

  componentDidMount() {}

  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <>
        <Searchbar
          onChange={this.handleChange}
          onClick={this.searchImages}
          state={this.state}
        />
        {this.state.loaded === false ? (
          <div className="loader">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        ) : (
          <ImageGallery state={this.state} />
        )}
        ;
        {this.state.images.length !== 0 && (
          <Button onClick={this.loadMoreImages} />
        )}
      </>
    );
  }
}

export default App;

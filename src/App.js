import React, { Component } from "react";
import sendRequest from "./services/api";
import Loader from "react-loader-spinner";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    value: "",
    page: 1,
    images: [],
    loaded: "",
    modal: false,
    largeImage: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  searchImages = (e) => {
    this.setState({ images: [], page: 2, loaded: false });

    sendRequest(this.state.value, this.state.page, this, this.state.images);
  };

  loadMoreImages = () => {
    const page = this.state.page;
    this.setState({ page: page + 1 });

    sendRequest(this.state.value, this.state.page, this, this.state.images);
  };

  openLargeImage = (e) => {
    this.setState({ modal: true });

    const largeImage = this.state.images.find(
      (item) => item.id === Number(e.target.parentNode.id)
    );

    return this.setState({ largeImage: largeImage });
  };

  closeModal = (e) => {
    if (e.target.className === "Overlay") {
      this.setState({ modal: false, largeImage: "" });
    }
  };

  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  render() {
    const {
      handleChange,
      searchImages,
      loadMoreImages,
      openLargeImage,
      closeModal,
      state,
    } = this;

    return (
      <>
        <Searchbar
          onChange={handleChange}
          onClick={searchImages}
          state={state}
        />
        {state.loaded === false ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            className="loader"
          />
        ) : (
          <ImageGallery state={state} onClick={openLargeImage} />
        )}
        ;{state.images.length && <Button onClick={loadMoreImages} />};
        {state.modal && <Modal image={state.largeImage} onClick={closeModal} />}
      </>
    );
  }
}

export default App;

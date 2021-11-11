import React from "react";

function ImageGallery({ state, onClick }) {
  return (
    <ul className="ImageGallery">
      {state.images.map((item) => {
        return (
          <li id={item.id}>
            <img
              src={item.webformatURL}
              alt={item.id}
              className="ImageGalleryItem-image"
              onClick={onClick}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;

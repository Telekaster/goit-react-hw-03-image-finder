import React from "react";

function ImageGallery({ state }) {
  return (
    <ul className="ImageGallery">
      {state.images.map((item) => {
        return (
          <li id={item.id}>
            <img src={item.webformatURL} alt={item.id} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;

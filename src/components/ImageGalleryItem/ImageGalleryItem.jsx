import React from "react";

function ImageGalleryItem({ item, onClick }) {
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
}

export default ImageGalleryItem;

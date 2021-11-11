import React from "react";

function Modal({ image, onClick }) {
  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Modal">
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
}

export default Modal;

import React from "react";

function Button({ onClick }) {
  return (
    <button type="button" class="Button" onClick={onClick}>
      Load more
    </button>
  );
}

export default Button;

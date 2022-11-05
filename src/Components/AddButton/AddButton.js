import React from "react";

const AddButton = ({ onClick }) => {
  return (
    <button className="add-button" onClick={onClick}>
      Добавить в корзину
    </button>
  );
};

export default AddButton;

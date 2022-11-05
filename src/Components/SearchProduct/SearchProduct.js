import React from "react";
import { search } from "../../Icons/icons";

const SearchProduct = ({ value, onChange, placeholder }) => {
  return (
    <div className="flex flex-row py-2">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-input"
      />
      <button className="search-button">{search}</button>
    </div>
  );
};

export default SearchProduct;

import React from "react";
import { Link } from "react-router-dom";
import { disount, gift, updated } from "../../Iconly/icons";

const ProductCard = ({
  name,
  image,
  isDiscount,
  isGift,
  isUpdated,
  price,
  monthly,
  month,
  id,
}) => {
  return (
    <Link to={`/checkout/product/${id}`} className="productcards-link">
      <div className="productcard-image">
        <div className="absolute top-2 left-2 ">
          {isGift && gift} {isDiscount && disount}
          {isUpdated && updated}
        </div>
        <img src={image} alt={name} className="my-4" />
      </div>
      <h3 className="text-[15px]">{name}</h3>
      <p className="text-[15px] font-medium">
        {price.toLocaleString("ru-RU")} сум
      </p>
      <p className="">
        <span className="price-monthly">
          от {monthly.toLocaleString("ru-RU")} сум
        </span>
        <span className="text-[11px] text-grey">x{month}</span>
      </p>
    </Link>
  );
};

export default ProductCard;

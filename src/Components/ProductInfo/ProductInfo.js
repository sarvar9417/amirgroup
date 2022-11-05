import { find } from "lodash";
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../Datas/Products";
import { checkout } from "../../Iconly/icons";
import PageName from "../PageName/PageName";
import AddButton from "../AddButton/AddButton";

const ProductInfo = () => {
  const id = Number(useParams().id);
  const product = find(products, { id });
  console.log(product);

  return (
    <div className="relative h-full w-full rounded-[1rem] bg-white p-[1.875rem] flex flex-col justify-between">
      <div className="basket">{checkout}</div>
      <PageName pagename="Смартфон Apple iPhone 11 128 Gb Slim Box черный" />
      <div className="h-4/5 overflow-scroll ">
        <div className="w-full grid grid-cols-2 gap-3">
          <div>Image</div>
          <div>Image</div>
        </div>
      </div>
      <AddButton />
    </div>
  );
};

export default ProductInfo;

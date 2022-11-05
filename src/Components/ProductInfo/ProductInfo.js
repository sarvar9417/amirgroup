import { find } from "lodash";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../Datas/Products";
import { checkout } from "../../Icons/icons";
import PageName from "../PageName/PageName";
import AddButton from "../AddButton/AddButton";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
import Info from "../Info/Info";
import { data } from "./constants";
import Stocks from "../Stocks/Stocks";

const ProductInfo = () => {
  const id = Number(useParams().id);
  const product = find(products, { id });
  const { name, price, monthly } = product;
  const [stocks, setStocks] = useState(data);

  const handleStocks = (i) => {
    const newStocks = [...stocks];
    newStocks[i].checked = !newStocks[i].checked;
    setStocks([...newStocks]);
  };

  return (
    <div className="product-info">
      <div className="basket">{checkout}</div>
      <PageName pagename={name} />
      <div className="h-4/5 overflow-scroll ">
        <div className="w-full grid grid-cols-2 gap-4">
          <ImagesSlider product={product} />
          <Info price={price} monthly={monthly} />
        </div>
        <Stocks handleStocks={handleStocks} stocks={stocks} />
      </div>
      <AddButton />
    </div>
  );
};

export default ProductInfo;

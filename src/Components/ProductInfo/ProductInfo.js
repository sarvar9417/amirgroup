import { find, map, uniqueId } from "lodash";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../Datas/Products";
import { checkout, checked } from "../../Icons/icons";
import PageName from "../PageName/PageName";
import AddButton from "../AddButton/AddButton";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
import Info from "../Info/Info";
import { data } from "./constants";

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
        <div className="w-full">
          <h3 className="text-green my-2">Акции</h3>
          {map(
            stocks,
            ({ icon, text, subtext, title, checked: check }, index) => (
              <div
                className="w-full flex p-5 border-b border-[#e4e7ec]"
                key={uniqueId("")}
              >
                <div className="pr-4 pt-1">{icon}</div>
                <div className="w-full">
                  <p>{text}</p>
                  {subtext && <p>{text}</p>}
                  <p className="text-grey">{title}</p>
                </div>
                <div className="pr-7">
                  <button
                    className={`${
                      check
                        ? "bg-green border-green "
                        : "border-[#e4e7ec] bg-white"
                    } w-6 h-6 rounded flex items-center justify-center border`}
                    onClick={() => handleStocks(index)}
                  >
                    {check && checked}
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <AddButton />
    </div>
  );
};

export default ProductInfo;

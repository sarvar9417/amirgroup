import React, { useState } from "react";
import { disount, gift, procient, updated } from "../../Icons/icons";
import { products } from "../../Datas/Products";
import { map, uniqueId } from "lodash";

const ImagesSlider = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="h-[23.75rem] bg-background rounded-[1rem] flex items-center justify-center relative">
      <div className="absolute top-5 left-5 ">
        {updated} {gift} {disount} {procient}
      </div>
      <img
        src={product?.images[currentImage]}
        alt=""
        className="h-[16.75rem]"
      />
      <div className="w-full bottom-8 absolute flex justify-center">
        {map(products[0]?.images, (image, index) => (
          <button
            key={uniqueId("sliderButton")}
            onClick={() => setCurrentImage(index)}
            className={`${
              index === currentImage ? "bg-black" : "bg-grey"
            } w-[6px] h-[6px] rounded-full mx-1`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImagesSlider;

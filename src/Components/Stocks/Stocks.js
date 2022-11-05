import React from "react";
import { map, uniqueId } from "lodash";
import { checked } from "../../Icons/icons";

const Stocks = ({ stocks, handleStocks }) => {
  return (
    <div className="w-full">
      <h3 className="text-green my-2">Акции</h3>
      {map(stocks, ({ icon, text, subtext, title, checked: check }, index) => (
        <div
          className="w-full flex p-5 border-b border-[#e4e7ec]"
          key={uniqueId("")}
        >
          <div className="pr-4 pt-1">{icon}</div>
          <div className="w-full">
            <p className="font-medium">{text}</p>
            {subtext && <p>{subtext}</p>}
            <p className="text-grey">{title}</p>
          </div>
          <div className="pr-7">
            <button
              className={`${
                check ? "bg-green border-green " : "border-[#e4e7ec] bg-white"
              } w-6 h-6 rounded flex items-center justify-center border`}
              onClick={() => handleStocks(index)}
            >
              {check && checked}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stocks;

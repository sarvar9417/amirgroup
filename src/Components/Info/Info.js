import React, { useState } from "react";
import { map, uniqueId } from "lodash";
import { right } from "../../Icons/icons";

const Info = ({ price, monthly }) => {
  const [curentMonth, setCurrentMonth] = useState(3);
  const months = [3, 6, 12, 24];

  return (
    <div className="text-[15px]">
      <div className="text-[15px]">
        <p className="text-grey">Цена телефона</p>
        <h3 className="font-medium">6 000 000 сум</h3>
      </div>
      <div className="text-[15px] py-5 border-y border-background my-5">
        <p className="text-grey">Общая цена (с наценкой)</p>
        <div className="font-medium flex justify-between">
          <p>{price?.toLocaleString("ru-RU")} сум</p>
          <p>
            <span className="price-monthly">
              {monthly.toLocaleString("ru-RU")} сум
            </span>
            <span className="text-[11px] text-grey">x{3}</span>
          </p>
        </div>
        <div className="rounded-md overflow-hidden border-green border mt-4 mb-2">
          {map(months, (month, index) => (
            <button
              onClick={() => setCurrentMonth(month)}
              key={uniqueId()}
              className={`${
                curentMonth === month ? "bg-green text-white" : "text-green"
              } w-1/4 py-[0.625rem] text-center  border-green ${
                index === months.length - 1 ? "" : "border-r"
              }`}
            >
              {month} мес
            </button>
          ))}
        </div>
        <p className="text-center">
          <span>Наценка: </span>
          <span className="font-medium">5 %</span>
        </p>
      </div>
      <div>
        <p className="text-grey">Общие характеристики</p>
        <div className="my-1 text-black-text">
          <p>Тип: моноблок (классический)</p>
          <p>Стандарт: 2G, 3G, 4G (LTE), 5G</p>
          <p>Операционная система: iOS 14</p>
        </div>
      </div>
      <div className="flex justify-between font-medium text-green">
        <span>Показать все</span>
        <span>{right}</span>
      </div>
    </div>
  );
};

export default Info;

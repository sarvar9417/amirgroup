import React, { useEffect, useState } from "react";
import { useLocation, useParams, useRoutes } from "react-router-dom";
import { routes } from "./constants";
import { rightMini } from "../../Icons/icons";
import { find } from "lodash";
import { products } from "../../Datas/Products";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="mb-2 py-2 text-xs flex items-center">
        <span className="text-grey pr-2">Заявки</span>
        {rightMini}
        <span className="text-green pl-2">Оформить заказ</span>
      </div>
      {useRoutes(routes)}
    </div>
  );
};

export default Checkout;

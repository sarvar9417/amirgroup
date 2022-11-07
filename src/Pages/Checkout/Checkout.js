import React, { useEffect, useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { routes } from "./constants";
import { rightMini } from "../../Icons/icons";
import { products } from "../../Datas/Products";

const Checkout = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const { pathname } = location;
    const path = pathname.split("/");
    const id = path[path.length - 1];
    !!Number(id) ? setProduct(products[id - 1]) : setProduct(null);
  }, [location]);

  return (
    <div className="checkout">
      <div className="location">
        <span className="text-grey pr-2">Заявки</span>
        {rightMini}
        <span className={`${product ? "text-grey" : "text-green"} px-2`}>
          Оформить заказ
        </span>
        {product && (
          <>
            {rightMini}
            <span className="text-green pl-2">{product?.name}</span>
          </>
        )}
      </div>
      {useRoutes(routes)}
    </div>
  );
};

export default Checkout;

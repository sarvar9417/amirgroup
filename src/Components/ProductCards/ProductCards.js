import { map, uniqueId } from "lodash";
import React, { useState } from "react";
import CountOfProducts from "../CountOfProducts/CountOfProducts";
import PageName from "../PageName/PageName";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";
import SearchProduct from "../SearchProduct/SearchProduct";
import { products } from "../../Datas/Products";

const ProductCards = () => {
  const productsCount = 121;
  const countPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <>
      <PageName pagename={"Оформить заказ"} />
      <SearchProduct placeholder={"Поиск по названию товара"} />
      <div className="productcards">
        <CountOfProducts count={productsCount} />
        <div className="productcards-cards">
          {map(
            products,
            ({
              name,
              image,
              isDiscount,
              isGift,
              isUpdated,
              price,
              monthly,
              month,
              id,
            }) => (
              <ProductCard
                id={id}
                key={uniqueId("productCard")}
                name={name}
                image={image}
                isDiscount={isDiscount}
                isGift={isGift}
                isUpdated={isUpdated}
                price={price}
                monthly={monthly}
                month={month}
              />
            )
          )}
        </div>
        <Pagination
          countPage={countPage}
          currentPage={currentPage}
          totalDatas={productsCount}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default ProductCards;

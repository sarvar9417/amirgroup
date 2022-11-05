import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./constants";

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='mb-2 py-2'>Routes</div>
      {useRoutes(routes)}
    </div>
  );
};

export default Checkout;

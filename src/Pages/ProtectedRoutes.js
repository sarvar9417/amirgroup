import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

const MainPage = lazy(() => import("./Main/Main"));
const OrdersPage = lazy(() => import("./Orders/Orders"));
const ProductsPage = lazy(() => import("./Products/Products"));
const ReviewsPage = lazy(() => import("./Reviews/Reviews"));
const CheckoutPage = lazy(() => import("./Checkout/Checkout"));

const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/orders",
    element: <OrdersPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/reviews",
    element: <ReviewsPage />,
  },
  {
    path: "/checkout/*",
    element: <CheckoutPage />,
  },
];

const ProtectedRoutes = () => {
  const protectedRoutes = useRoutes(routes);
  return (
    <div className="m-5 mr-[3.75rem] min-h-max  w-full rounded-[6px] bg-background px-7 py-4">
      {protectedRoutes}
    </div>
  );
};

export default ProtectedRoutes;

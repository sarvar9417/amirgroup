import ProductCards from "../../Components/ProductCards/ProductCards";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";

const routes = [
  {
    path: "/",
    element: <ProductCards />,
  },
  {
    path: "/product/:id",
    element: <ProductInfo />,
  },
];

export { routes };

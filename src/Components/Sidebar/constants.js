import {
  checkout,
  checkoutActive,
  home,
  homeActive,
  order,
  orderActive,
  product,
  productActive,
  review,
  reviewActive,
} from "../../Iconly/icons";

const navLinks = [
  {
    icon: home,
    activeIcon: homeActive,
    path: "",
    label: "Главная",
  },
  {
    icon: order,
    activeIcon: orderActive,
    path: "orders",
    label: "Заказы",
  },
  {
    icon: product,
    activeIcon: productActive,
    path: "products",
    label: "Товары",
  },
  {
    icon: review,
    activeIcon: reviewActive,
    path: "reviews",
    label: "Отзывы",
  },
  {
    icon: checkout,
    activeIcon: checkoutActive,
    path: "checkout",
    label: "Оформить заказ",
  },
];

export { navLinks };

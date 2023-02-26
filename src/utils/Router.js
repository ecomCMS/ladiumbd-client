import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Analytics from "../pages/Analytics/Analytics";
import Content from "../pages/Content/Content";
import Customers from "../pages/Customers/Customers";
import Dashboard from "../pages/Dashboard/Dashboard";
import Discounts from "../pages/Discounts/Discounts";
import Orders from "../pages/Orders/Orders";
import Products from "../pages/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/content",
        element: <Content />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/discounts",
        element: <Discounts />,
      },
    ],
  },
]);

import "./styles/theme.css";
import "./styles/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FavouritePage } from "./views/FavouritePage/FavouritePage.tsx";
import { CartPage } from "./views/CartPage/CartPage.tsx";
import { Layout } from "./components/Layout/Layout.tsx";
import { MainPage } from "./views/MainPage/MainPage.tsx";
import { ProductsPage } from "./views/ProductsPage/ProductsPage.tsx";
import { mainPageLoader } from "./api/mainPageLoader.ts";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/ulubione",
        element: <FavouritePage />,
      },
      {
        path: "/koszyk",
        element: <CartPage />,
      },
      {
        path: "/",
        element: <MainPage />,
        loader: mainPageLoader
      },
      {
        path: "/:category",
        element: <ProductsPage />,
      },
      {
        path: "/:category/:subcategory",
        element: <ProductsPage />,
      },
      {
        path: "/:category/:subcategory/:subsubcategory",
        element: <ProductsPage />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

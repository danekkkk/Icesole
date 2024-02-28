import "./styles/theme.css";
import "./styles/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FavouritePage } from "./views/FavouritePage/FavouritePage.tsx";
import { CartPage } from "./views/CartPage/CartPage.tsx";
import { Layout } from "./components/Layout/Layout.tsx";
import { MainPage } from "./views/MainPage/MainPage.tsx";

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
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

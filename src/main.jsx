import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import FavouritesPage from "./pages/FavouritePage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/favourites",
    element: <FavouritesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

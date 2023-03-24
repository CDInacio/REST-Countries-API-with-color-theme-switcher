import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import ThemeContextProvider from "./context/themeContext";
import Navbar from "./components/Navbar";
import "./index.css";

import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <div className="min-h-screen bg-very-dark-blue1 dark:bg-very-light-grey duration-300">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </ThemeContextProvider>
  </React.StrictMode>
);

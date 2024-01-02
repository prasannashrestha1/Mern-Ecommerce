import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth.jsx";

import { DatePicker, message } from "antd";
import { SearchProvider } from "./context/Search.jsx";
import { CartProvider } from "./context/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <SearchProvider>
      <BrowserRouter>
        <CartProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </CartProvider>
      </BrowserRouter>
    </SearchProvider>
  </AuthProvider>
);

/** @format */

import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App.tsx";
import "./styles/index.css";
import "./styles/reset.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

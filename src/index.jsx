import React from "react";
import { createRoot } from "react-dom/client";
import App from "../page/app";
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className="main">
    <App />
  </div>
);

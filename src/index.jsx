import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Item from "./components/item";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className="main">
    <Header />
    <Item />
  </div>
);

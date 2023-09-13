import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/customStyles.css";
import App from "./App";
import { AppStore } from "./app-store/app-store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppStore>
    <App />
  </AppStore>
);

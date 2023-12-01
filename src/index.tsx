import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@theme/styles.scss";
import "@theme/ModalCalificar.scss";
import "@theme/ModalComments.scss";
import "@theme/courseButtons.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

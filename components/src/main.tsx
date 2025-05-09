import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "@emotion/react";
import { resetCss } from "./styles/reset";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={resetCss} />
    <App />
  </React.StrictMode>
);

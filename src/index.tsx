import ReactDOM from "react-dom/client";
import "./index.css";
import Init from "./init";
import { StrictMode } from "react";

const rootElem = document.getElementById("root")

if (!rootElem) {
  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(rootElem);

root.render(
  <StrictMode>
    <Init />
  </StrictMode>
);

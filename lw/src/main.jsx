import React from "react";
import ReactDOM from "react-dom/client"; // Use the new API
import App from "./App";
import "./index.css"; // If you have global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
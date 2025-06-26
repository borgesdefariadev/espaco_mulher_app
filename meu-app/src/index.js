import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom"; // Importe o BrowserRouter

const container = document.getElementById("root");

if (!container) {
  throw new Error("Elemento root não encontrado no DOM");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* Envolva o App com BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

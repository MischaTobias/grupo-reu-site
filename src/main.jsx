import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GrupoReuSite } from "./GrupoReuSite";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GrupoReuSite />
  </StrictMode>
);

import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export const GrupoReuSite = () => {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
};

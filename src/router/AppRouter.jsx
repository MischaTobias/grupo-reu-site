import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../home-page/HomePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

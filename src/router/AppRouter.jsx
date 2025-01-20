import { Navigate, Route, Routes } from "react-router-dom";
import { AboutUs, HomePage, PracticeAreas } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/practice-areas" element={<PracticeAreas />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

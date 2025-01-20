import { Navigate, Route, Routes } from "react-router-dom";
import { AboutUs, ContactUs, HomePage, PracticeAreas } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/practice-areas" element={<PracticeAreas />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

import { HeroSection } from "./components/HeroSection";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <HeroSection />
      <NavigationBar />
    </header>
  );
};

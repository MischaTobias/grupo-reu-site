import { HeroSection } from "../hero-section/HeroSection";
import { NavigationBar } from "../navigation-bar/NavigationBar";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <HeroSection />
      <NavigationBar />
    </header>
  );
};

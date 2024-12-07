import {
  HeaderNavLinks,
  HeaderNavFeatures,
  Logo,
  HeroSection,
} from "./components";

export const Header = () => {
  return (
    <header id="header" className="header-effect-shrink">
      <HeroSection />

      <div className="container">
        <div className="header-row">
          <div className="header-column">
            {/* Logo */}
            <Logo />
          </div>
          <div className="header-column justify-content-end">
            <div className="header-row">
              {/* Header Nav Links */}
              <HeaderNavLinks />

              {/* Header Nav Features */}
              <HeaderNavFeatures />
              <button
                className="btn header-btn-collapse-nav"
                data-bs-toggle="collapse"
                data-bs-target=".header-nav-main nav"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

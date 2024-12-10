import { HeroSection } from "./components/HeroSection";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      {/* Top Info Bar */}
      <HeroSection />

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/assets/grupo-reu-logo.jpeg"
              alt="Logo"
              className="logo me-2"
              height="40"
            />
            <span className="brand-text">Grupo REU Law Firm, L.L.C.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Acerca De
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Áreas De Práctica
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Abogados
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Casos De Estudio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

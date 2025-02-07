import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";

const pages = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Sobre Nosotros",
    path: "/about",
  },
  {
    name: "Servicios",
    path: "/practice-areas",
  },
  {
    name: "Contacto",
    path: "/contact-us",
  },
];

export const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to={"/"}>
          <img
            src="./assets/grupo-reu-logo.jpeg"
            alt="Grupo REU Law Firm Logo"
          />
        </Link>
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
            {pages.map((page, index) => {
              return (
                <li className="nav-item" key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    to={page.path}
                  >
                    {page.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

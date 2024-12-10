import "./NavigationBar.css";

export const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/assets/grupo-reu-logo.jpeg"
            alt="Grupo REU Law Firm Logo"
          />
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
  );
};

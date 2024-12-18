export const HeaderNavLinks = () => {
  return (
    <div className="header-nav header-nav-links">
      <div className="header-nav-main header-nav-main-text-capitalize header-nav-main-effect-2 header-nav-main-sub-effect-1">
        <nav className="collapse">
          <ul className="nav nav-pills" id="mainNav">
            <li>
              <a className="nav-link active" href="#">
                Inicio
              </a>
            </li>
            <li>
              <a href="demo-law-firm-2-about.html" className="nav-link">
                Acerca de
              </a>
            </li>
            <li className="dropdown">
              <a
                href="demo-law-firm-2-practice-areas.html"
                className="dropdown-item dropdown-toggle"
              >
                Áreas de práctica
              </a>
              <ul className="dropdown-menu border-radius-0">
                <li>
                  <a
                    href="demo-law-firm-2-practice-areas-detail.html"
                    className="nav-link"
                  >
                    Family Law
                  </a>
                </li>
                <li>
                  <a
                    href="demo-law-firm-2-practice-areas-detail.html"
                    className="nav-link"
                  >
                    Capital Law
                  </a>
                </li>
                <li>
                  <a
                    href="demo-law-firm-2-practice-areas-detail.html"
                    className="nav-link"
                  >
                    Business Law
                  </a>
                </li>
                <li>
                  <a
                    href="demo-law-firm-2-practice-areas-detail.html"
                    className="nav-link"
                  >
                    Accident & Injury Law
                  </a>
                </li>
                <li>
                  <a
                    href="demo-law-firm-2-practice-areas-detail.html"
                    className="nav-link"
                  >
                    Health Law
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="demo-law-firm-2-attorney.html" className="nav-link">
                Abogados
              </a>
            </li>
            <li>
              <a href="demo-law-firm-2-case-study.html" className="nav-link">
                Casos de estudio
              </a>
            </li>
            <li>
              <a href="demo-law-firm-2-blog.html" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="demo-law-firm-2-contact.html" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

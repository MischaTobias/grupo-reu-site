import { TopBar } from "./TopBar";

export const Header = () => {
  return (
    <header
      id="header"
      className="header-effect-shrink"
      data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}"
    >
      <div className="header-body header-body-bottom-border border-top-0">
        {/* Top Bar */}
        <TopBar />
        {/* Header Container */}
        <div className="header-container container">
          <div className="header-row">
            <div className="header-column">
              <div className="header-row">
                <div className="header-logo">
                  <a href="./">
                    <img
                      src="../../assets/grupo-reu-logo.jpeg"
                      className="img-fluid"
                      width="123"
                      height="49"
                      alt="Grupo Reu Law Firm Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="header-column justify-content-end">
              <div className="header-row">
                <div className="header-nav header-nav-links">
                  <div className="header-nav-main header-nav-main-text-capitalize header-nav-main-effect-2 header-nav-main-sub-effect-1">
                    <nav className="collapse">
                      <ul className="nav nav-pills" id="mainNav">
                        <li>
                          <a href="./" className="nav-link active">
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="demo-law-firm-2-about.html"
                            className="nav-link"
                          >
                            About
                          </a>
                        </li>
                        <li className="dropdown">
                          <a
                            href="demo-law-firm-2-practice-areas.html"
                            className="dropdown-item dropdown-toggle"
                          >
                            Practice Areas
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
                          <a
                            href="demo-law-firm-2-attorney.html"
                            className="nav-link"
                          >
                            Attorney
                          </a>
                        </li>
                        <li>
                          <a
                            href="demo-law-firm-2-case-study.html"
                            className="nav-link"
                          >
                            Case Study
                          </a>
                        </li>
                        <li>
                          <a
                            href="demo-law-firm-2-blog.html"
                            className="nav-link"
                          >
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="demo-law-firm-2-contact.html"
                            className="nav-link"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="header-nav-features header-nav-features-no-border">
                  <div className="header-nav-feature header-nav-features-search d-inline-flex">
                    <a
                      href="#"
                      className="header-nav-features-toggle text-decoration-none"
                      data-focus="headerSearch"
                      aria-label="Search"
                    >
                      <i className="icons icon-magnifier header-nav-top-icon font-weight-bold text-4 top-2 text-color-hover-primary"></i>
                    </a>
                    <div
                      className="header-nav-features-dropdown header-nav-features-dropdown-mobile-fixed"
                      id="headerTopSearchDropdown"
                    >
                      <form
                        role="search"
                        action="page-search-results.html"
                        method="get"
                      >
                        <div className="simple-search input-group">
                          <input
                            className="form-control text-1"
                            id="headerSearch"
                            name="q"
                            type="search"
                            // value=""
                            placeholder="Search..."
                          />
                          <button
                            className="btn"
                            type="submit"
                            aria-label="Search"
                          >
                            <i className="icons icon-magnifier header-nav-top-icon font-weight-bold text-color-dark text-4 text-color-hover-primary top-2"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
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
      </div>
    </header>
  );
};

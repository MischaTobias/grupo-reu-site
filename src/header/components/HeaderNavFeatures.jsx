export const HeaderNavFeatures = () => {
  return (
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
          <form role="search" action="page-search-results.html" method="get">
            <div className="simple-search input-group">
              <input
                className="form-control text-1"
                id="headerSearch"
                name="q"
                type="search"
                // value=""
                placeholder="Search..."
              />
              <button className="btn" type="submit" aria-label="Search">
                <i className="icons icon-magnifier header-nav-top-icon font-weight-bold text-color-dark text-4 text-color-hover-primary top-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const TopBar = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-row">
          <div className="header-column justify-content-start">
            <div className="header-row">
              <ul className="list list-unstyled list-inline mb-0">
                <li className="list-inline-item text-color-dark me-md-4 mb-0">
                  <i className="icons icon-phone text-color-primary text-4 position-relative top-2 me-1"></i>
                  <a
                    href="tel:+7732838838"
                    className="text-color-dark text-color-hover-primary text-decoration-none"
                  >
                    <strong>(773) 283-8838</strong>
                  </a>
                </li>
                <li className="list-inline-item text-color-dark me-4 mb-0 d-none d-md-inline-block">
                  <i className="icons icon-envelope text-color-primary text-4 position-relative top-4 me-1"></i>
                  <a
                    href="mailto:info@gruporeu.com"
                    className="text-color-dark text-color-hover-primary text-decoration-none text-2"
                  >
                    info@gruporeu.com
                  </a>
                </li>
                <li className="list-inline-item text-color-dark text-2 mb-0 d-none d-lg-inline-block">
                  <i className="icons icon-calendar text-color-primary text-3-5 position-relative top-1 me-1"></i>
                  Mon - Sat 9am - 5pm
                </li>
              </ul>
            </div>
          </div>
          <div className="header-column justify-content-end">
            <div className="header-row">
              <ul className="header-social-icons social-icons social-icons-clean d-none d-lg-block">
                <li className="social-icons-facebook">
                  <a
                    href="https://www.facebook.com/gruporeu"
                    target="_blank"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social-icons-whatsapp">
                  <a
                    href="https://wa.me/+17736714993/?text=%C2%A1Hola%21%20%C2%BFPuedo%20obtener%20informaci%C3%B3n%20acerca%20de%20procesos%20migratorios%3F"
                    target="_blank"
                    title="Whatsapp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
              <a
                href="https://ww7.welcomeclient.com/4DCGI/web_handle_general_intake/get/10804"
                className="btn btn-primary btn-px-4 py-3 font-weight-bold text-2 rounded-0 ms-lg-4"
              >
                REQUEST CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

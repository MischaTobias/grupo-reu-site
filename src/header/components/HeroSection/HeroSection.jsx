import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="top-info-bar">
      <div className="container">
        {/* Left Section */}
        <div className="contact-info">
          <a className="me-3 phone-number" href="tel:+7732838838">
            <i className="fa fa-phone"></i> <strong>(773) 283-8838</strong>
          </a>
          <a
            className="me-3 email d-none d-md-inline"
            href="mailto:info@gruporeu.com"
          >
            <i className="far fa-envelope"></i> info@gruporeu.com
          </a>
          <span className="d-none d-lg-inline">
            <i className="far fa-calendar"></i> Lunes - Sábado 9am - 5pm
          </span>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="social-icons d-none d-md-inline">
            <a href="https://www.facebook.com/gruporeu" className="me-2">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://wa.me/+17736714993/?text=%C2%A1Hola%21%20%C2%BFPuedo%20obtener%20informaci%C3%B3n%20acerca%20de%20procesos%20migratorios%3F">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <a
            href="https://ww7.welcomeclient.com/4DCGI/web_handle_general_intake/get/10804"
            className="btn btn-primary btn-sm text-white solicitar-btn"
          >
            Solicitar Consulta
          </a>
        </div>
      </div>
    </div>
  );
};

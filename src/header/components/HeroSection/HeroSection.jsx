import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="top-info-bar">
      <div className="container">
        {/* Left Section */}
        <div className="contact-info">
          <span className="me-3">
            <i className="fa fa-phone"></i> (773) 283-8838
          </span>
          <span className="me-3">
            <i className="far fa-envelope"></i> info@gruporeu.com
          </span>
          <span>
            <i className="far fa-calendar"></i> Lunes - Sábado 9am - 5pm
          </span>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <a
            href="#"
            className="btn btn-primary btn-sm text-white solicitar-btn"
            style={{ backgroundColor: "#b88b4a" }}
          >
            Solicitar Consulta
          </a>
          <div className="social-icons">
            <a href="#" className="me-2">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

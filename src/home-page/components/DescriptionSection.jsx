import "./DescriptionSection.css";

export const DescriptionSection = () => {
  return (
    <div className="container py-5 mt-3">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 mb-5 mb-lg-0 animate__animated animate__faster animate__fadeInUp">
          <h2 className="mb-4">
            <em className="descriptionTitle">
              Servicio Global Provisto Por Excelentes Abogados
            </em>
          </h2>
          <p className="description mb-4">
            En Grupo REU Law Firm, LLC, ofrecemos servicios legales
            excepcionales y atención compasiva a clientes que enfrentan desafíos
            en inmigración, derecho familiar y planificación patrimonial. Ya sea
            que necesite asistencia con casos complejos de deportación,
            peticiones familiares, divorcios o asignación de responsabilidades
            parentales, nuestro equipo está comprometido a proteger sus derechos
            y brindar soluciones efectivas.
          </p>
          <p
            className="mb-3"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="600"
            style={{ animationDelay: "600ms", color: "grey" }}
          >
            CYNTHIA MAZARIEGOS DE FERNANDEZ - CEO &amp; FOUNDER
          </p>
          <img
            src="img/demos/law-firm-2/signature.png"
            className="img-fluid appear-animation animated fadeInUpShorter appear-animation-visible"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="700"
            alt=""
            style={{ animationDelay: "700ms" }}
          />
        </div>
        <div className="col-md-9 col-lg-6 ps-lg-5">
          <div className="position-relative">
            <div
              className="custom-shape-1 appear-animation animated fadeInUpShorterPlus appear-animation-visible"
              data-appear-animation="fadeInUpShorterPlus"
              data-appear-animation-delay="1100"
              style={{ animationDelay: "1100ms" }}
            >
              <div
                className="position-absolute top-0 left-0 right-0 bottom-0 bg-primary"
                data-plugin-float-element=""
                data-plugin-options="{'startPos': 'top', 'speed': 0.1, 'transition': true, 'transitionDuration': 1000, 'isInsideSVG': true}"
                style={{
                  top: "0px",
                  transition: "transform 1000ms ease-out",
                  transform: "translate3d(0px, 19.9973%, 0px)",
                }}
              ></div>
            </div>
            <div
              data-plugin-float-element=""
              data-plugin-options="{'startPos': 'top', 'speed': 0.3, 'transition': true, 'transitionDuration': 1000, 'isInsideSVG': true}"
              style={{
                top: "0px",
                transition: "transform 1000ms ease-out",
                transform: "translate3d(0px, 6.35009%, 0px)",
              }}
            >
              <img
                src="img/demos/law-firm-2/generic/generic-1.jpg"
                className="img-fluid position-relative z-index-1 appear-animation animated fadeInUpShorterPlus appear-animation-visible"
                data-appear-animation="fadeInUpShorterPlus"
                data-appear-animation-delay="900"
                alt=""
                style={{ animationDelay: "900ms" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

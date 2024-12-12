import React from "react";

export const DescriptionSection = () => {
  return (
    <div className="container py-5 mt-3">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h2
            className="text-color-dark font-weight-extra-bold text-10 mb-4 appear-animation animated fadeInUpShorter appear-animation-visible"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="200"
            style={{ animationDelay: "200ms" }}
          >
            <em>Servicio Global Provisto Por Excelentes Abogados</em>
          </h2>
          <p
            className="font-weight-light text-color-dark mb-4 appear-animation animated fadeInUpShorter appear-animation-visible"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="400"
            style={{ animationDelay: "400ms" }}
          >
            Grupo REU Law Firm ofrece atención compasiva y experiencia en casos
            complejos de inmigración y derecho de familia, como deportaciones,
            peticiones familiares, divorcios y custodia parental.
            <br />
            Su compromiso es brindar servicios legales de alta calidad,
            enfocados en la satisfacción del cliente y en superar sus
            expectativas.
          </p>
          <p
            className="positive-ls-3 text-color-grey mb-3 appear-animation animated fadeInUpShorter appear-animation-visible"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="600"
            style={{ animationDelay: "600ms" }}
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

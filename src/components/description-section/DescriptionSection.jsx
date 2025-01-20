import "./DescriptionSection.css";

export const DescriptionSection = () => {
  return (
    <div className="container py-5 mt-3">
      <div className="row align-items-center justify-content-center animate__animated animate__faster animate__fadeInUp">
        <div className="col-lg-8 mb-5 mb-lg-0">
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
          <p className="ceo mb-3">
            CYNTHIA MAZARIEGOS DE FERNANDEZ - CEO &amp; FOUNDER
          </p>
        </div>
        <div className="col-lg-4 ps-lg-5">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a href="/consulta" className="btn btn-primary consulta-btn">
              Hable con un abogado hoy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

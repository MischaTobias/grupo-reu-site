import { Link } from "react-router-dom";
import { PageLayout } from "../../components";

export const AboutUs = () => {
  return (
    <PageLayout>
      <div className="container mt-5 about-us animate__animated animate__faster animate__fadeInUp">
        <h1 className="text-center mb-4">Acerca de Nosotros</h1>
        <div className="row">
          <div className="col-md-6">
            <h2 className="h4">¿Quiénes Somos?</h2>
            <p>
              En <strong>REU Law Firm</strong>, nos dedicamos a brindar
              servicios legales excepcionales con compasión y profesionalismo.
              Nuestro equipo experimentado se especializa en leyes de
              inmigración, derecho familiar, planificación patrimonial y más.
              Nos enorgullecemos de ser un aliado de confianza para individuos y
              familias que enfrentan desafíos legales complejos.
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="h4">Nuestra Misión</h2>
            <p>
              Nuestra misión es proteger los derechos de nuestros clientes y
              ofrecer soluciones efectivas adaptadas a sus necesidades únicas.
              Creemos en construir relaciones duraderas basadas en la confianza,
              la transparencia y los resultados. Ya sea que necesite ayuda con
              casos de deportación, peticiones familiares o planificación
              patrimonial, estamos aquí para ayudarle.
            </p>
          </div>
        </div>
        <div
          className="mt-4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 className="h4">¿Por Qué Elegirnos?</h2>
          <ul className="list-unstyled">
            <li>
              <i className="fa-regular fa-circle-check"></i> Más de 10 años de
              experiencia legal
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i> Atención
              personalizada para cada caso
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i> Historial
              comprobado de éxito
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i> Equipo multilingüe
              listo para asistirle
            </li>
          </ul>
        </div>
        <div
          className="text-center mt-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="lead">
            Permítanos ayudarle a enfrentar sus desafíos legales con confianza.
          </p>
          <Link className="btn btn-primary btn-lg consulta-btn" to={"/contact"}>
            Contáctenos Hoy
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

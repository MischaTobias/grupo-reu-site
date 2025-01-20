import { FadeImage, PageLayout } from "../../components";

export const PracticeAreas = () => {
  return (
    <PageLayout>
      <div className="container mt-3 align-items-center justify-content-center animate__animated animate__faster animate__fadeInUp">
        <div className="row py-5">
          <div className="col-lg-7 mb-5 mb-lg-0" style={{ height: "100%" }}>
            <h2 className="mb-4">
              <em className="descriptionTitle">Inmigración Familiar</em>
            </h2>
            <p className="description mb-4">
              Ayudamos a las familias a reunirse y permanecer juntas:
            </p>
            <ul>
              <li>
                <b>Petición de Familiares: </b>Tramitamos solicitudes para
                obtener la residencia permanente para familiares cercanos.
              </li>
              <li>
                <b>Ciudadanía y Naturalización: </b>Lo guiamos en el proceso
                para convertirse en ciudadano estadounidense.
              </li>
              <li>
                <b>Representación ante Cortes de Inmigración: </b> Proveemos
                defensa legal para casos de deportación o remoción.
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <FadeImage imageName="family-immigration.jpg" />
          </div>
        </div>
        <hr />
        <div className="row py-5">
          <div className="col-lg-5">
            <FadeImage imageName="action-protection.jpg" isLeftFade />
          </div>
          <div className="col-lg-7 mb-5 mb-lg-0">
            <h2 className="mb-4">
              <em className="descriptionTitle">
                Programas de Acción y Protección
              </em>
            </h2>
            <p className="description mb-4">
              Apoyamos su aplicación a programas humanitarios y de acción
              diferida:
            </p>
            <ul>
              <li>
                <b>DACA (Acción Diferida para los Llegados en la Infancia):</b>
                Asistimos a jóvenes elegibles para protegerse contra la
                deportación y obtener permisos de trabajo.
              </li>
              <li>
                <b>DAPA: </b>Información sobre posibles programas futuros.
              </li>
              <li>
                <b>TPS (Estatus de Protección Temporal): </b> Ayuda a quienes
                enfrentan crisis en sus países de origen.
              </li>
              <li>
                <b>Visas Humanitarias (U Visa y VAWA): </b> Asistimos a víctimas
                de abuso o violencia en el proceso de solicitud de protecciones
                legales.
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row py-5">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <h2 className="mb-4">
              <em className="descriptionTitle">
                Asilo y Protección Internacional
              </em>
            </h2>
            <p className="description mb-4">
              Defendemos sus derechos como solicitante de asilo:
            </p>
            <ul>
              <li>
                <b>Asilo Político: </b>Representación para quienes buscan
                refugio debido a persecución en sus países de origen.
              </li>
              <li>
                <b>Perdones Migratorios: </b>Apoyo con trámites para superar
                inadmisibilidades.
              </li>
              <li>
                <b>Otras Opciones de Inmigración: </b> Exploramos soluciones
                adicionales según sus necesidades.
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <FadeImage imageName="asylum-protection.jpg" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

import { PageLayout, ContactForm, OfficeMap } from "../../components";

export const ContactUs = () => {
  return (
    <PageLayout>
      <div className="container mt-3 align-items-center justify-content-center animate__animated animate__faster animate__fadeInUp">
        <div className="row py-5">
          <div className="col-lg-8 mb-5 mb-lg-0" style={{ height: "100%" }}>
            <ContactForm />
          </div>
          <div className="col-lg-4" style={{ height: "100%" }}>
            <h2 className="mb-4">
              <em className="descriptionTitle">Estamos ubicados en:</em>
            </h2>
            <p className="description mb-4">
              4037 N. Pulaski Rd., Suite R Chicago, IL 60641
            </p>
            <OfficeMap />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

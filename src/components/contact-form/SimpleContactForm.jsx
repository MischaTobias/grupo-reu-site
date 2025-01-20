import { useForm } from "../../../hooks";

const contactFormFields = {
  email: "",
  message: "",
  name: "",
};

export const SimpleContactForm = () => {
  const { email, message, name, formState, onInputChange } =
    useForm(contactFormFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formState);
    // Aquí puedes agregar la lógica para enviar los datos al backend
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow"
        style={{ width: "70%", maxWidth: "700px" }}
      >
        <h2 className="text-center mb-4">Contáctenos</h2>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Escriba su nombre"
            value={name}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Escriba su correo"
            value={email}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            placeholder="Escriba su mensaje"
            value={message}
            onChange={onInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

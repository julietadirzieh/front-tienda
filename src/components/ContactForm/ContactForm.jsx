import { useContact } from "../../hooks/useContact";
import Button from "../Button/Button";
import ContactInput from "./components/ContactInput/ContactInput";

const ContactForm = () => {
  const { formik } = useContact();
  return (
    <div className="bg-gray-100 rounded-xl mx-auto py-6 px-6 shadow-xl w-90%">
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 flex flex-col">
          <div className="-mx-3 md:flex">
            <div className="md:w-1/2 px-3 md:mb-0">
              <ContactInput
                label="Nombre y Apellido"
                id="personalName"
                onChange={formik.handleChange}
                value={formik.values.personalName}
                error={formik.errors.personalName}
              />
            </div>
            <div className="md:w-1/2 px-3">
              <ContactInput
                label="Empresa"
                id="companyName"
                onChange={formik.handleChange}
                value={formik.values.companyName}
                error={formik.errors.companyName}
              />
            </div>
          </div>

          <div className="-mx-3 md:flex">
            <div className="md:w-1/2 px-3 md:mb-0">
              <ContactInput
                label="Email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
              />
            </div>
            <div className="md:w-1/2 px-3">
              <ContactInput
                label="Teléfono"
                id="tel"
                onChange={formik.handleChange}
                value={formik.values.tel}
                error={formik.errors.tel}
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3 md:mb-0">
              <ContactInput
                label="Consulta"
                id="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                error={formik.errors.message}
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mt-2">
            <div className="md:w-full px-3">
              <Button
                type="submit"
                disabled={Object.keys(formik.errors).length > 0}
              >
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

import { useModifyUser } from "../../hooks/useModifyUser";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

const UserEditForm = () => {
  const { formik, handleDeleteUser } = useModifyUser();
  return (
    <div className="bg-gray-100 rounded-xl mx-auto py-6 px-6 shadow-xl w-full md:w-2/3 mb-6%">
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 flex flex-col">
          <div className="md:flex">
            <div className="md:w-1/3 px-3 md:mb-0">
              <FormInput
                label="Nombre de la empresa"
                id="companyName"
                onChange={formik.handleChange}
                value={formik.values.companyName}
                error={formik.errors.companyName}
              />
            </div>
            <div className="md:w-1/3 px-3">
              <FormInput
                label="CUIT"
                id="cuit"
                onChange={formik.handleChange}
                value={formik.values.cuit}
                error={formik.errors.cuit}
              />
            </div>
            <div className="md:w-1/3 px-3">
              <FormInput
                label="Nombre Personal"
                id="personalName"
                onChange={formik.handleChange}
                value={formik.values.personalName}
                error={formik.errors.personalName}
              />
            </div>
          </div>

          <div className="md:flex">
            <div className="md:w-1/2 px-3 md:mb-0">
              <FormInput
                label="Email"
                id="email"
                disabled
                value={formik.values.email}
              />
            </div>
            <div className="md:w-1/2 px-3">
              <FormInput
                label="Teléfono"
                id="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.errors.phone}
              />
            </div>
          </div>

          <div className="md:flex mb-3">
            <div className="md:w-1/4 px-3 md:mb-0">
              <FormInput
                label="Calle"
                id="street"
                onChange={formik.handleChange}
                value={formik.values.street}
                error={formik.errors.street}
              />
            </div>
            <div className="md:w-1/4 px-3 md:mb-0">
              <FormInput
                label="Altura"
                id="number"
                onChange={formik.handleChange}
                value={formik.values.number}
                error={formik.errors.number}
              />
            </div>
            <div className="md:w-1/4 px-3 md:mb-0">
              <FormInput
                label="Localidad"
                id="locality"
                onChange={formik.handleChange}
                value={formik.values.locality}
                error={formik.errors.locality}
              />
            </div>
            <div className="md:w-1/4 px-3 md:mb-0">
              <FormInput
                label="Código Postal"
                id="postalCode"
                onChange={formik.handleChange}
                value={formik.values.postalCode}
                error={formik.errors.postalCode}
              />
            </div>
          </div>

          <div className="md:flex mb-3">
            <div className="md:w-full px-3 md:mb-0">
              <FormInput
                label="Contraseña"
                id="password"
                value={formik.values.password}
                error={formik.errors.password}
                autoComplete="off"
                placeholder="*********"
                type="password"
                disabled
              />
            </div>
          </div>

          <div className="md:flex mt-2">
            <div className="md:w-full text-center px-3">
              <Button
                type="submit"
                disabled={Object.keys(formik.errors).length > 0}
              >
                Modificar datos
              </Button>
            </div>
          </div>
        </div>

        <div className="my-3 text-center md:text-left">
          <h3 className="md:inline-block">¿Querés eliminar tu cuenta?</h3>
          <h4 className="text-sm md:inline-block ml-2 md:ml-0">
            Hacé click
            <button
              type="button"
              className="text-sm md:inline-block underline px-1 hover:text-red"
              onClick={handleDeleteUser}
            >
              acá
            </button>
            para eliminar la cuenta.
          </h4>
        </div>
      </form>
    </div>
  );
};

export default UserEditForm;

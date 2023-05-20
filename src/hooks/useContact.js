import { useFormik } from "formik";
import * as Yup from "yup";

const alphaRegex = /^[A-Za-z]+$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  personalName: Yup.string()
    .min(2, "Demasiado corto!")
    .max(50, "Demasiado largo!")
    .matches(alphaRegex, "Letras solamente")
    .required("Requerido"),
  companyName: Yup.string()
    .min(2, "Demasiado corto!")
    .max(50, "Demasiado largo!")
    .matches(alphaRegex, "Letras solamente")
    .required("Requerido"),
  email: Yup.string().email("Email inválido"),
  tel: Yup.string().matches(phoneRegExp, "Teléfono inválido"),
  message: Yup.string().min(2, "Demasiado corto!").max(140, "Demasiado largo!"),
});

export const useContact = () => {
  const onSubmit = async (values) => {
    try {
      console.log(values);
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      personalName: "",
      companyName: "",
      email: "",
      tel: "",
      message: "",
    },
    onSubmit,
    validationSchema,
  });

  return {
    formik,
  };
};

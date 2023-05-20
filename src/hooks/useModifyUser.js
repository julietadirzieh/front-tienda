import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useDeleteUserMutation,
  useModifyUserMutation,
} from "../state/apis/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { setCredentials } from "../state/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const alphaRegex = /^[A-Za-z]+$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(2, "Demasiado corto!")
    .max(20, "Demasiado largo!")
    .required("Requerido"),
  cuit: Yup.string().matches(phoneRegExp, "Números solamente"),
  personalName: Yup.string()
    .min(2, "Demasiado corto!")
    .max(20, "Demasiado largo!")
    .matches(alphaRegex, "Letras solamente")
    .required("Requerido"),
  email: Yup.string().email("Email inválido").required("Requerido"),
  phone: Yup.string()
    .matches(phoneRegExp, "Números solamente")
    .required("Requerido"),
  street: Yup.string().required("Requerido"),
  number: Yup.string().required("Requerido"),
  locality: Yup.string().required("Requerido"),
  postalCode: Yup.string().required("Requerido"),
  /*  password: Yup.string()
         .required("Requerido")
         .min(8, "La contraseña debe contener un mínimo de 8 caracteres")
         .max(16, "La contraseña debe contener un máximo de 16 caracteres")
         .matches(alphaNumericRegex, "Números y letras solamente"), */
});

export const useModifyUser = () => {
  const user = useSelector((state) => state.auth.user);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverErrorResponse, setServerErrorResponse] = useState(null);
  const [modifyUser] = useModifyUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const onSubmit = async (values) => {
    try {
      const body = {
        companyName: values?.companyName,
        cuit: values?.cuit,
        personalName: values?.personalName,
        email: values?.email,
        phone: values?.phone,
        address: {
          street: values?.street,
          number: values?.number,
          locality: values?.locality,
          postalCode: values?.postalCode,
        },
        password: values?.password,
      };
      const result = await modifyUser(body);

      const hasError = !result.data;

      if (!hasError) {
        toast.success("Los datos fueron modificados exitosamente");
        await dispatch(setCredentials(result.data));
        return result;
      }
      setServerErrorResponse(result?.error?.data?.errors[0]?.msg);
    } catch (err) {
      toast.error("Los datos no pudieron ser modificados");
      console.log(err)
    }
  };

  const showErrorMsg = (msg) => {
    if (msg === "EMAIL_ALREADY_IN_USE") {
      return "Email ya existente";
    }
    if (msg === "EMAIL_NOT_VALID") {
      return "Email inválido";
    }
  };

  const formik = useFormik({
    initialValues: {
      companyName: user?.companyName,
      cuit: user?.cuit,
      personalName: user?.personalName,
      email: user?.email,
      phone: user?.phone,
      street: user?.address?.street,
      number: user?.address?.number,
      locality: user?.address?.locality,
      postalCode: user?.address?.postalCode,
      password: user?.password,
    },
    onSubmit,
    validationSchema,
  });

  const onDeleteSuccess = () => {
    navigate("/");
  };

  const handleDeleteUser = async () => {
    try {
      const confirmDelete = confirm(
        "¿Estás seguro que quieres eliminar el usuario? Al confirmar no podrás seguir utilizando esta cuenta y se perderán todos los datos."
      );

      if (confirmDelete === true) {
        await deleteUser(auth);
        toast.success("Cuenta eliminada exitosamente");
        onDeleteSuccess();
      }
      return auth;
    } catch {
      toast.error("La cuenta no fue eliminado");
    }
  };

  return {
    formik,
    showErrorMsg,
    serverErrorResponse,
    handleDeleteUser,
  };
};

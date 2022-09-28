import { Formik } from "formik";
import {login} from "../../auth/auth"
import CloseIcon from "@mui/icons-material/Close";

import "./index.css";

export const ModalEnter = ({ modalCloseHandler, handleSubmit }) => {
  const enterData = {
    email: "tesyyyt@gmail.com",
    password: "thissrlycoolpass",
  };


  return (
    <div className="modal">
      <h3 className="modal__heading">Войти</h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values) => {
          handleSubmit(enterData);
          modalCloseHandler();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} action="submit" className="modal__form">
            <label htmlFor="" className="modal__label">
              <input
                type="text"
                className="modal__input"
                placeholder="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </label>
            <label htmlFor="" className="modal__label">
              <input
                type="password"
                className="modal__input"
                placeholder="Пароль"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </label>
            <p className="modal-error">
              {" "}
              {errors.email && touched.email && errors.email}
            </p>
            <button type="submit" className="modal__btn">
              Войти
            </button>
          </form>
        )}
      </Formik>
      <button className="modal__register">Зарегистрироваться</button>
      <button className="modal__password">Забыли пароль?</button>
      <button className="modal__close" onClick={modalCloseHandler}>
        <CloseIcon sx={{ color: "#9494A0" }} />
      </button>
    </div>
  );
};

export default ModalEnter;

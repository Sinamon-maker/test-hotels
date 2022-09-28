import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CloseIcon from "@mui/icons-material/Close";

import "./index.css";

export const ModalRegister = ({modalCloseHandler}) => {
  return (
    <div className="modal">
      <h3 className="modal__heading">Зарегистрироваться</h3>
      <form action="submit" className="modal__form">
        <label htmlFor="" className="modal__label">
          <input
            type="text"
            className="modal__input"
            placeholder="email"
            name="email"
            value=""
          />
        </label>
        <label htmlFor="" className="modal__label">
          <input
            type="password"
            className="modal__input"
            placeholder="Пароль"
            name="password"
            value=""
          />
        </label>
        <label htmlFor="" className="modal__label">
          <input
            type="password"
            className="modal__input"
            placeholder="Повторите пароль"
            name="password"
            value=""
          />
        </label>
        <p className="modal-error">gjgjkgkg</p>

        <p className="modal__checkbox-block">
          <input
            type="checkbox"
            className="modal__input-checkbox"
            name="data"
          />
          <span className="modal__input-checkbox-imitator" aria-hidden="true">
            <CheckBoxIcon sx={{ color: "#9494A0" }} />
          </span>
          <label htmlFor="" className="modal__label-checkbox">
            Я принимаю условия Пользовательского соглашения, политики
            конфиденциальности, Обработки и распространения персональных данных
            Далее
          </label>
        </p>
        <button type="submit" className="modal__btn">
          Далее
        </button>
      </form>

      <button className="modal__close" onClick={modalCloseHandler}>
        <CloseIcon sx={{ color: "#9494A0" }} />
      </button>
    </div>
  );
};

export default ModalRegister;

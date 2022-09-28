import ModalEnter from "../modalEnter";
import ModalRegister from "../modalRegister";

import "./index.css";

export const ModalContainer = ({
  modalType,
  modalCloseHandler,
  handleSubmitLogin,
}) => {
  if (modalType === "") return null;

  return (
    <div className="overlay">
      {modalType === "enter" && (
        <ModalEnter
          modalCloseHandler={modalCloseHandler}
          handleSubmit={handleSubmitLogin}
        />
      )}

      {modalType === "register" && (
        <ModalRegister modalCloseHandler={modalCloseHandler} />
      )}
    </div>
  );
};

export default ModalContainer;

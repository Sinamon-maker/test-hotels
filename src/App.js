import { useState } from "react";
import Navigation from "./Components/navigation";
import Header from "./Components/header";
import CardsContainer from "./Components/cardsContainer";
import { ModalContainer } from "./Components/modalContainer";
import login from "./auth/auth";
import useAuth from "./hooks/useAuth";
import getProtectedData from "./auth/data";

import "./App.css";
import { refresh } from "./auth/refresh";

function App() {
  const [overlay, setOverlay] = useState(true);
  const [modalType, setModalType] = useState("register");

  const authenticate = useAuth(login);
  const getRefreshToken = useAuth(refresh);

  const modalCloseHandler = () => {
    setModalType("");
    setOverlay(false);
    console.log("close", overlay, modalType);
    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  // FUNCTION TO HANDLE OPEN ACTION ON SIDEDRAWER/MODAL
  const openModal = (modalType) => {
    console.log("open");
    setOverlay(true);
    setModalType(modalType);
    //  Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const handleSubmitLogin = async (data) => {
    const res = await authenticate.request(data);
    return;
  };

  const getProtectedInfo = async () => {
    const result = await getRefreshToken.request(authenticate.refreshToken);
    const res = getProtectedData(result.acessToken);
    return res.data;
  };

  const main = overlay === true ? "main modal-open" : "main ";

  return (
    <div className={main}>
      <Navigation openModal={openModal} />
      <Header />
      <CardsContainer />
      {overlay && (
        <ModalContainer
          modalType={modalType}
          modalCloseHandler={modalCloseHandler}
          handleSubmitLogin={handleSubmitLogin}
        />
      )}
    </div>
  );
}

export default App;

import "./index.css";

export const Navigation = ({ openModal }) => {
  return (
    <nav className="navigation ">
      <div className="container navigation__container">
        <button rel="stylesheet" href="#" className="navigation__btn">
          Главная
        </button>
        <ul className="navigation__list">
          <li className="navigation__item">
            <button
              className="navigation__btn"
              onClick={() => openModal("register")}
            >
              Регистрация
            </button>
          </li>
          <li className="navigation__item">
            <button
              type="button"
              className="navigation__btn navigation__btn-enter"
              onClick={() => openModal("enter")}
            >
              Вход
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

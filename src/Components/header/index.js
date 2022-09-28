import SearchIcon from "@mui/icons-material/Search";

import "./index.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <h1 className="header__title">
          Найдите лучшее предложение от ресторана
        </h1>
        <div className="header__find">
          <div className="header__search-block">
            <label className="header__search">
              <input
                type="text"
                className="header__search-input"
                placeholder="Город, адрес, шоссе или ЖК"
                name="search"
              />
            </label>
            <SearchIcon sx={{ color: "#9494A0" }} />
          </div>

          <button className="header__find__btn">Найти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

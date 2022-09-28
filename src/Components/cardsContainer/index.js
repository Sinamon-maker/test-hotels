import RoomIcon from "@mui/icons-material/Room";
import hotelPicture from "../../images/Rectangle 1018.jpg"

import "./index.css";

export const CardsContainer = () => {
  return (
    <section className="cards">
      <div className="container cards__container">
        <h2 className="cards__heading">Популярные предложения</h2>
        <p className="cards__subheading">
          Предложения, которые любят наши клиенты
        </p>
        <ul className="cards__list">
          <li className="cards__item">
            <div className="cards__img__container">
              <img src={hotelPicture} alt="" className="cards__img" />
            </div>
            <div className="cards__description">
              <h3 className="cards__title">Infinity Plaza</h3>
              <a href="#" className="cards__location">
                {" "}
                <RoomIcon sx={{ fontSize: 20 }} /> <span>Анталья, Турция</span>
              </a>
              <p className="cards__detailes">Один из крупнейших ресторанов</p>
              <p className="cards__pricing">от $56 000 000</p>
              <button className="cards__btn">Подробнее</button>
            </div>
          </li>
          <li className="cards__item">
            <div className="cards__img__container">
              <img src={hotelPicture} alt="" className="cards__img" />
            </div>
            <div className="cards__description">
              <h3 className="cards__title">Infinity Plaza</h3>
              <a href="#" className="cards__location">
                {" "}
                <RoomIcon sx={{ fontSize: 20 }} /> <span>Анталья, Турция</span>
              </a>
              <p className="cards__detailes">Один из крупнейших ресторанов</p>
              <p className="cards__pricing">от $56 000 000</p>
              <button className="cards__btn">Подробнее</button>
            </div>
          </li>
          <li className="cards__item">
            <div className="cards__img__container">
              <img src={hotelPicture} alt="" className="cards__img" />
            </div>
            <div className="cards__description">
              <h3 className="cards__title">Infinity Plaza</h3>
              <a href="#" className="cards__location">
                {" "}
                <RoomIcon sx={{ fontSize: 20 }} /> <span>Анталья, Турция</span>
              </a>
              <p className="cards__detailes">Один из крупнейших ресторанов</p>
              <p className="cards__pricing">от $56 000 000</p>
              <button className="cards__btn">Подробнее</button>
            </div>
          </li>
          <li className="cards__item">
            <div className="cards__img__container">
              <img src={hotelPicture} alt="" className="cards__img" />
            </div>
            <div className="cards__description">
              <h3 className="cards__title">Infinity Plaza</h3>
              <a href="#" className="cards__location">
                {" "}
                <RoomIcon sx={{ fontSize: 20 }} /> <span>Анталья, Турция</span>
              </a>
              <p className="cards__detailes">Один из крупнейших ресторанов</p>
              <p className="cards__pricing">от $56 000 000</p>
              <button className="cards__btn">Подробнее</button>
            </div>
          </li>
          <li className="cards__item">
            <div className="cards__img__container">
              <img src={hotelPicture} alt="" className="cards__img" />
            </div>
            <div className="cards__description">
              <h3 className="cards__title">Infinity Plaza</h3>
              <a href="#" className="cards__location">
                {" "}
                <RoomIcon sx={{ fontSize: 20 }} /> <span>Анталья, Турция</span>
              </a>
              <p className="cards__detailes">Один из крупнейших ресторанов</p>
              <p className="cards__pricing">от $56 000 000</p>
              <button className="cards__btn">Подробнее</button>
            </div>
          </li>
          <li className="cards__item">
            <div className="cards__img__container">
              <img src={hotelPicture} alt="" className="cards__img" />
            </div>
            <div className="cards__description">
              <h3 className="cards__title">Infinity Plaza</h3>
              <a href="#" className="cards__location">
                {" "}
                <RoomIcon sx={{ fontSize: 20 }} /> <span>Анталья, Турция</span>
              </a>
              <p className="cards__detailes">Один из крупнейших ресторанов</p>
              <p className="cards__pricing">от $56 000 000</p>
              <button className="cards__btn">Подробнее</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CardsContainer;

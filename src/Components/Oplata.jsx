import React from "react";
import logo from "../assets/feeduplogo.png";
import { Link } from "react-router-dom";

const Oplata = () => {
  return (
    <div id="oplata">
      <div className="flex oplata-head">
        <Link to={"/"}>
          <i className="fa-solid fa-share fa-flip-horizontal back"></i>
        </Link>
        <img src={logo} alt="logo" />
      </div>
      <h2 className="oplata-h2">Оплатить удобным для вас способом</h2>
      <div className="post">
        <img
          src="https://feedup-api.itsone.uz/uploads/photo-1667381138171.jpg"
          alt="labash"
          className="labash"
        />
        <div className="post-txt">
          <h5>Заказ</h5>
          <p className="post-txt-p">Вот что вы выбрали</p>
          <p className="post-txt-p2">Лаваш Халапеньо с сыром</p>
        </div>
      </div>

      <div className="post-settings">
        <div className="quantity">
          <p className="quantity-name">Лаваш Мини</p>
          <div className="quantity-price">
            <p>19 000,00 UZS</p>
            <div className="buttons">
              <button className="btn-minus">-</button>
              <p>1</p>
              <button className="btn-plus">+</button>
            </div>
          </div>
        </div>

        <div className="delivery">
          <p className="delivery-name">Доставка</p>
          <p>11 000,00 UZS</p>
        </div>

        <div className="total">
          <p className="total-name">Общая сумма</p>
          <p>30 000,00 UZS</p>
        </div>
      </div>

      <div className="payment">
        <div className="payment-text">
          <p>Тип оплаты</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>

        <div className="payment-btn">
          <button className="have">Оплата наличными</button>
          <button className="payme">Оплата через Payme</button>
        </div>
      </div>

      <div className="footer-oplatit">
        <button className="footer-btn">Oплатить 30 000,00 UZS</button>
      </div>
    </div>
  );
};

export default Oplata;

import React from "react";
import logo from "../assets/feeduplogo.png";

const Oplata = () => {
  return (
    <div id="oplata">
      <div className="flex oplata-head">
        <i className="fa-solid fa-circle-arrow-left  back"></i>
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
    </div>
  );
};

export default Oplata;

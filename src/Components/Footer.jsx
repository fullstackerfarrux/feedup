import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="flex">
        <div className="footer-text">
          <p className="all">Общая сумма</p>
          <p className="uzs">Uzs</p>
          <p>19 000,00</p>
        </div>

        <button>Заказать</button>
      </div>
    </div>
  );
};

export default Footer;

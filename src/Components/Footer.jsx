import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="flex">
        <div className="footer-text">
          <p className="all">Общая сумма</p>
          <p className="uzs">Uzs</p>
          <p>19 000,00</p>
        </div>

        <Link to="/oplata">
          <button>Заказать</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

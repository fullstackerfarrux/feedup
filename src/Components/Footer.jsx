import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [data, setdata] = useState([]);
  let obsh = localStorage.getItem("price");

  return (
    <div id="footer">
      <div className="flex">
        <div className="footer-text">
          <p className="all">Общая сумма</p>
          <p className="uzs">Uzs</p>
          <p>{obsh} 000,00</p>
        </div>

        <Link to="/oplata">
          <button>Заказать</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

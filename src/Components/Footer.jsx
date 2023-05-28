import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [loggedInName, setLoggedInName] = useState(null);

  useEffect(() => {
    setLoggedInName(localStorage.getItem("price") || null);
    window.addEventListener("storage", storageEventHandler, false);
  }, []);

  function storageEventHandler() {
    setLoggedInName(localStorage.getItem("price") || null);
  }

  return (
    <div id="footer">
      <div className="flex">
        <div className="footer-text">
          <p className="all">Общая сумма</p>
          <p className="uzs">Uzs</p>
          {/* {window.addEventListener("storage", () => { */}
          <p>{loggedInName} 000,00</p>
          {/* })} */}
          {/* <p>{obsh} 000,00</p> */}
        </div>

        <Link to="/oplata">
          <button>Заказать</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

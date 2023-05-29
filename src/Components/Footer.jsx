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
          {loggedInName != null ? <p>{loggedInName} 000,00</p> : ""}
        </div>
        {loggedInName > 0 ? (
          <Link to="/oplata">
            <button>Заказать</button>
          </Link>
        ) : (
          <button>Заказать</button>
        )}
      </div>
    </div>
  );
};

export default Footer;

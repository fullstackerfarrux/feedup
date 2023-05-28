import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Burger = () => {

  const [burger, setBurger] = useState([]);

  useEffect(() => {
    // get burger
    fetch("http://localhost:4000/getburger", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setBurger(data);
      });
  }, []);

  return (
    <>
      <Home />
      <div id="burger">
        <div className="flex flexfor">
          {burger.map((b, index) => (
            <div key={index} className="card">
              <img src={b.burger_img} alt="lavash" />
              <p>{b.burger_name}</p>
              <h6>UZS {b.burger_price}</h6>
              <div className="flex">
                <button>-</button>
                <button className="plus">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Burger;

import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    // get pizza
    fetch("http://localhost:4000/getpizza", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
      });
  }, []);

  return (
    <>
      <Home />
      <div id="pizza">
        <div className="flex flexfor">
          {pizza.map((p, index) => (
            <div key={index} className="card">
              <img src={p.pizza_img} alt="lavash" />
              <p>{p.pizza_name}</p>
              <h6>UZS {p.pizza_price}</h6>
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

export default Pizza;

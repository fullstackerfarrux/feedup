import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Pizza = () => {

  let product = [
    {
      id: 1,
      pizza_name: "Пицца FEED UP",
      pizza_img: "https://feedup-api.itsone.uz/uploads/photo-1667381927129.jpg",
      pizza_price: "60 000,00",
    },
    {
      id: 2,
      pizza_name: "Пицца Пеперони",
      pizza_img: "https://feedup-api.itsone.uz/uploads/photo-1667381892763.jpg",
      pizza_price: "53 000,00",
    },
    {
      id: 3,
      pizza_name: "Пицца Маргарита",
      pizza_img: "https://feedup-api.itsone.uz/uploads/photo-1667381864861.jpg",
      pizza_price: "45 000,00",
    },
    {
      id: 4,
      pizza_name: "Пицца Комбинированная",
      pizza_img: "https://feedup-api.itsone.uz/uploads/photo-1667381821533.jpg",
      pizza_price: "53 000,00",
    },
  ];

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
          {product.map((p, index) => (
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

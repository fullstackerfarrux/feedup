import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Burger = () => {
  let product = [
    {
      id: 1,
      burger_name: "Лонг Уппер куринний",
      burger_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667376815847.jpg",
      burger_price: "27 000,00",
    },
    {
      id: 2,
      burger_name: "Лонг Уппер говяжий",
      burger_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667376815847.jpg",
      burger_price: "34 000,00",
    },
    {
      id: 3,
      burger_name: "Чикен Зингер с сыром",
      burger_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667376815847.jpg",
      burger_price: "27 000,00",
    },
    {
      id: 4,
      burger_name: "Дабл Бургер с сыром",
      burger_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667376815847.jpg",
      burger_price: "38 000,00",
    },
    {
      id: 5,
      burger_name: "Гамбургер",
      burger_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667376815847.jpg",
      burger_price: "27 000,00",
    },
    {
      id: 6,
      burger_name: "Барбекю Бургер c сыром",
      burger_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667376815847.jpg",
      burger_price: "31 000,00",
    },
    {
      id: 7,
      burger_name: "Дабл Бургер",
      burger_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667376815847.jpg",
      burger_price: "35 000,00",
    },
    {
      id: 8,
      burger_name: "Чикен Зингер",
      burger_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667376815847.jpg",
      burger_price: "24 000,00",
    },
    {
      id: 9,
      burger_name: "Барбекю Бургер",
      burger_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667376815847.jpg",
      burger_price: "28 000,00",
    },
    {
      id: 10,
      burger_name: "Чизбургер",
      burger_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667376815847.jpg",
      burger_price: "30 000,00",
    },
    {
      id: 11,
      burger_name: "Чикенбургер",
      burger_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667376815847.jpg",
      burger_price: "26 000,00",
    },
  ];

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
          {product.map((b, index) => (
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

import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Napitka = () => {

  let product = [
    {
      id: 1,
      napitka_name: "Cofe (qora)",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667385236059.jpg",
      napitka_price: "6 000,00",
    },
    {
      id: 2,
      napitka_name: "Cofe 3х1",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667385236059.jpg",
      napitka_price: "6 000,00",
    },
    {
      id: 3,
      napitka_name: "FANTA 0.5L PET",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667385318193.jpg",
      napitka_price: "8 000,00",
    },
    {
      id: 4,
      napitka_name: "COCA-COLA 0.5L PET",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667385364957.jpg",
      napitka_price: "8 000,00",
    },
    {
      id: 5,
      napitka_name: "FANTA 1.5L PET",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667385452008.jpg",
      napitka_price: "15 000,00",
    },
    {
      id: 6,
      napitka_name: "COLA 1.5L PET",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667385514203.jpg",
      napitka_price: "15 000,00",
    },
    {
      id: 7,
      napitka_name: "Минеральная вода 0,5 (без газ)",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667385581854.jpg",
      napitka_price: "3 000,00",
    },
    {
      id: 8,
      napitka_name: "Минеральная вода 0,5 (с газ)",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667385581854.jpg",
      napitka_price: "3 000,00",
    },
    {
      id: 9,
      napitka_name: "Чай (черный, зеленый)",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667385058925.jpg",
      napitka_price: "4 000,00",
    },
    {
      id: 10,
      napitka_name: "Айс теа",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667385100767.jpg",
      napitka_price: "19 000,00",
    },
    {
      id: 11,
      napitka_name: "cola 400 ml",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1677622982175.jpg",
      napitka_price: "7 000,00",
    },
    {
      id: 12,
      napitka_name: "Fanta 400 ml",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1677622982175.jpg",
      napitka_price: "7 000,00",
    },
    {
      id: 13,
      napitka_name: "Cola 500 ml",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1677623026311.jpg",
      napitka_price: "8 000,00",
    },
    {
      id: 14,
      napitka_name: "Fanta 500 ml",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1677623026311.jpg",
      napitka_price: "8 000,00",
    },
    {
      id: 15,
      napitka_name: "Чай с лимоном",
      napitka_img:
        "https://feedup-api.itsone.uz/uploads/photo-1677623265966.jpg",
      napitka_price: "6 000,00",
    },
  ];

  const [napitka, setNapitka] = useState([]);

  useEffect(() => {
    // get pizza
    fetch("http://localhost:4000/getnapitka", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setNapitka(data);
      });
  }, []);

  return (
    <>
      <Home />
      <div id="pizza">
        <div className="flex flexfor">
          {product.map((p, index) => (
            <div key={index} className="card">
              <img src={p.napitka_img} alt="lavash" />
              <p>{p.napitka_name}</p>
              <h6>UZS {p.napitka_price}</h6>
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

export default Napitka;

import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import { useEffect, useState, useMemo } from "react";

const Kombo = () => {
  let product = [
    {
      id: 1,
      kombo_name: "Комбо Биг донар",
      kombo_img: "https://feedup-api.itsone.uz/uploads/photo-1683121857865.jpg",
      kombo_price: "56 000,00",
    },
    {
      id: 2,
      kombo_name: "Комбо Гамбургер",
      kombo_img: "https://feedup-api.itsone.uz/uploads/photo-1683121857865.jpg",
      kombo_price: "48 000,00",
    },
    {
      id: 3,
      kombo_name: "Комбо Чизбургер",
      kombo_img: "https://feedup-api.itsone.uz/uploads/photo-1683121857865.jpg",
      kombo_price: "51 000,00",
    },
    {
      id: 4,
      kombo_name: "Комбо Лаваш",
      kombo_img: "https://feedup-api.itsone.uz/uploads/photo-1683121857865.jpg",
      kombo_price: "50 000,00",
    },
    {
      id: 5,
      kombo_name: "Комбо Донар",
      kombo_img: "https://feedup-api.itsone.uz/uploads/photo-1683121857865.jpg",
      kombo_price: "48 000,00",
    },
    {
      id: 6,
      kombo_name: "Кидс Бокс",
      kombo_img: "https://feedup-api.itsone.uz/uploads/photo-1683121857865.jpg",
      kombo_price: "45 000,00",
    },
  ];

  const [kombo, setKombo] = useState([]);

  useEffect(() => {
    // get kombo
    fetch("http://localhost:4000/getkombo", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setKombo(data);
      });
  }, []);

  return (
    <>
      <Home />
      <div id="kombo">
        <div className="flex flexfor">
          {product.map((k, index) => (
            <div key={index} className="card">
              <img src={k.kombo_img} alt="lavash" />
              <p>{k.kombo_name}</p>
              <h6>UZS {k.kombo_price}</h6>
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

export default Kombo;

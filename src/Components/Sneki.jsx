import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Sneki = () => {

    let product = [
      {
        id: 1,
        sneki_name: "Сырные кубики",
        sneki_img:
          "https://feedup-api.itsone.uz/uploads/photo-1667384545140.jpg",
        sneki_price: "19 000,00",
      },
      {
        id: 2,
        sneki_name: "Картофель по-деревенски",
        sneki_img:
          "https://feedup-api.itsone.uz/uploads/photo-1667384447240.jpg",
        sneki_price: "15 000,00",
      },
      {
        id: 3,
        sneki_name: "Чикен Стик",
        sneki_img:
          "https://feedup-api.itsone.uz/uploads/photo-1667384579466.jpg",
        sneki_price: "20 000,00",
      },
      {
        id: 4,
        sneki_name: "Картофельные шарики",
        sneki_img:
          "https://feedup-api.itsone.uz/uploads/photo-1667384504841.jpg",
        sneki_price: "17 000,00",
      },
      {
        id: 5,
        sneki_name: "Картофель фри",
        sneki_img:
          "https://feedup-api.itsone.uz/uploads/photo-1667384392241.jpg",
        sneki_price: "14 000,00",
      },
    ];

  const [sneki, setSneki] = useState([]);

  useEffect(() => {
    // get sneki
    fetch("http://localhost:4000/getsneki", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setSneki(data);
      });
  }, []);

  return (
    <>
      <Home />
      <div id="pizza">
        <div className="flex flexfor">
          {product.map((p, index) => (
            <div key={index} className="card">
              <img src={p.sneki_img} alt="lavash" />
              <p>{p.sneki_name}</p>
              <h6>UZS {p.sneki_price}</h6>
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

export default Sneki;

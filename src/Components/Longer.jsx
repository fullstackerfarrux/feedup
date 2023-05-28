import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Longer = () => {

  let product = [
    {
      id: 1,
      longer_name: "Донар",
      longer_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381700739.jpg",
      longer_price: "27 000,00",
    },
    {
      id: 2,
      longer_name: "Биг донар",
      longer_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381700739.jpg",
      longer_price: "35 000,00",
    },
    {
      id: 3,
      longer_name: "Кинг-Дог",
      longer_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381700739.jpg",
      longer_price: "22 000,00",
    },
    {
      id: 4,
      longer_name: "Хот-Дог",
      longer_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381700739.jpg",
      longer_price: "16 000,00",
    },
  ];

  const [longer, setLonger] = useState([]);

  useEffect(() => {
    // get longer
    fetch("http://localhost:4000/getlonger", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setLonger(data);
      });
  }, []);

  return (
    <>
      <Home />
      <div id="pizza">
        <div className="flex flexfor">
          {product.map((p, index) => (
            <div key={index} className="card">
              <img src={p.longer_img} alt="lavash" />
              <p>{p.longer_name}</p>
              <h6>UZS {p.longer_price}</h6>
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

export default Longer;

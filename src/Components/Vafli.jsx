import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Vafli = () => {

  let product = [
    {
      id: 1,
      vafli_name: "BUBBLE WAFFLE (микс)",
      vafli_img: "https://feedup-api.itsone.uz/uploads/photo-1667380628401.jpg",
      vafli_price: "41 000,00",
    },
    {
      id: 2,
      vafli_name: "BUBBLE WAFFLE (клубника)",
      vafli_img: "https://feedup-api.itsone.uz/uploads/photo-1667380628401.jpg",
      vafli_price: "36 000,00",
    },
    {
      id: 3,
      vafli_name: "BUBBLE WAFFLE (банан)",
      vafli_img: "https://feedup-api.itsone.uz/uploads/photo-1667380628401.jpg",
      vafli_price: "36 000,00",
    },
    {
      id: 4,
      vafli_name: "BUBBLE WAFFLE (классика)",
      vafli_img: "https://feedup-api.itsone.uz/uploads/photo-1667380628401.jpg",
      vafli_price: "33 000,00",
    },
  ];
  
  const [vafli, setVafli] = useState([]);

  useEffect(() => {
    // get vafli
    fetch("http://localhost:4000/getvafli", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setVafli(data);
      });
  }, []);

  return (
    <>
      <Home />
      <div id="pizza">
        <div className="flex flexfor">
          {product.map((p, index) => (
            <div key={index} className="card">
              <img src={p.vafli_img} alt="lavash" />
              <p>{p.vafli_name}</p>
              <h6>UZS {p.vafli_price}</h6>
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

export default Vafli;

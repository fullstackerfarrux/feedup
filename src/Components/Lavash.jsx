import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import { useEffect, useState, useMemo } from "react";

const Lavash = () => {
  let product = [
    {
      id: 1,
      lavash_name: "Лаваш Мини",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381138171.jpg",
      lavash_price: "19 000,00",
    },

    {
      id: 2,
      lavash_name: "Лаваш Говяжий с сыром",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381096354.jpg",
      lavash_price: "32 000,00",
    },
    {
      id: 3,
      lavash_name: "Лаваш Куриный ",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381096354.jpg",
      lavash_price: "28 000,00",
    },
    {
      id: 4,
      lavash_name: "Лаваш Мини с сыром ",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381138171.jpg",
      lavash_price: "22 000,00",
    },
    {
      id: 5,
      lavash_name: "Лаваш Говяжий ",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381096354.jpg",
      lavash_price: "29 000,00",
    },
    {
      id: 6,
      lavash_name: "Лаваш Куриный с сыром ",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381096354.jpg",
      lavash_price: "31 000,00",
    },
    {
      id: 7,
      lavash_name: "Лаваш Халапеньо с сыром ",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381096354.jpg",
      lavash_price: "32 000,00",
    },
    {
      id: 8,
      lavash_name: "Лаваш Халапеньо ",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381096354.jpg",
      lavash_price: "29 000,00",
    },
  ];
  const [lavash, setLavash] = useState([]);

  useEffect(() => {
    // get lavash
    fetch("http://localhost:4000/getlavashs", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setLavash(data);
      });
  }, []);

  return (
    <>
      <Home />
      <div id="lavash">
        <div className="flex flexfor">
          {product.map((l, index) => (
            <div key={index} className="card">
              <img src={l.lavash_img} alt="lavash" />
              <p>{l.lavash_name}</p>
              <h6>UZS {l.lavash_price}</h6>
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

export default Lavash;

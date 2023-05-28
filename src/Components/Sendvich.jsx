import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import { useEffect, useState, useMemo } from "react";

const Sendvich = () => {

  let product = [
    {
      id: 1,
      sendvich_name: "Клаб Сендвич",
      sendvich_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667384645546.jpg",
      sendvich_price: "28 000,00",
    },
  ];




  const [sendvich, setSendvich] = useState([]);

  useEffect(() => {
    // get lavash
    fetch("http://localhost:4000/getsendvich", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setSendvich(data);
      });
  }, []);
  return (
    <>
      <Home />
      <div id="sendvich">
        <div className="flex flexfor">
          {product.map((s, index) => (
            <div key={index} className="card">
              <img src={s.sendvich_img} alt="lavash" />
              <p>{s.sendvich_name}</p>
              <h6>UZS {s.sendvich_price}</h6>
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

export default Sendvich;

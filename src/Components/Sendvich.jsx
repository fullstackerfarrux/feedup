import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import { useEffect, useState, useMemo } from "react";

const Sendvich = () => {
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
          {sendvich.map((s, index) => (
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

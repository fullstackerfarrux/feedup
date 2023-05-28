import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Napitka = () => {
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
          {napitka.map((p, index) => (
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

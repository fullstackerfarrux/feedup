import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Vafli = () => {
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
          {vafli.map((p, index) => (
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

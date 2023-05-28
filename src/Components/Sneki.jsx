import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Sneki = () => {
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
          {sneki.map((p, index) => (
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

import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Sous = () => {
  const [sous, setSous] = useState([]);

  useEffect(() => {
    // get sous
    fetch("http://localhost:4000/getsous", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setSous(data);
      });
  }, []);

  return (
    <>
      <Home />
      <div id="pizza">
        <div className="flex flexfor">
          {sous.map((p, index) => (
            <div key={index} className="card">
              <img src={p.sous_img} alt="lavash" />
              <p>{p.sous_name}</p>
              <h6>UZS {p.sous_price}</h6>
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

export default Sous;

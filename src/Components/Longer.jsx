import React from "react";
import Home from "./Home";
import Footer from "./Footer";

import { useEffect, useState, useMemo } from "react";

const Longer = () => {
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
          {longer.map((p, index) => (
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

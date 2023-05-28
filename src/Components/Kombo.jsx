import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import { useEffect, useState, useMemo } from "react";

const Kombo = () => {
  const [kombo, setKombo] = useState([]);

  useEffect(() => {
    // get kombo
    fetch("http://localhost:4000/getkombo", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setKombo(data);
      });
  }, []);

  return (
    <>
      <Home />
      <div id="kombo">
        <div className="flex flexfor">
          {kombo.map((k, index) => (
            <div key={index} className="card">
              <img src={k.kombo_img} alt="lavash" />
              <p>{k.kombo_name}</p>
              <h6>UZS {k.kombo_price}</h6>
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

export default Kombo;

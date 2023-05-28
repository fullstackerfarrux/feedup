import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import { useEffect, useState, useMemo } from "react";

const Lavash = () => {
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
          {lavash.map((l, index) => (
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

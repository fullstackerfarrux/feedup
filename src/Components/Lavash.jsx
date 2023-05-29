import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import { useEffect, useState, useMemo } from "react";
const tg = window.Telegram.WebApp;

let lavashes = [];
const id = [];
const Lavash = () => {
  let [lav, setLav] = useState(lavashes);
  let product = [
    {
      id: 1,
      lavash_name: "Лаваш Мини",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381138171.jpg",
      lavash_price: "19",
    },

    {
      id: 2,
      lavash_name: "Лаваш Говяжий с сыром",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381096354.jpg",
      lavash_price: "32",
    },
    {
      id: 3,
      lavash_name: "Лаваш Куриный ",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381096354.jpg",
      lavash_price: "28",
    },
    {
      id: 4,
      lavash_name: "Лаваш Мини с сыром ",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381138171.jpg",
      lavash_price: "22",
    },
    {
      id: 5,
      lavash_name: "Лаваш Говяжий ",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381096354.jpg",
      lavash_price: "29",
    },
    {
      id: 6,
      lavash_name: "Лаваш Куриный с сыром ",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381096354.jpg",
      lavash_price: "31",
    },
    {
      id: 7,
      lavash_name: "Лаваш Халапеньо с сыром ",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381096354.jpg",
      lavash_price: "32",
    },
    {
      id: 8,
      lavash_name: "Лаваш Халапеньо ",
      lavash_img:
        "https://feedup-api.itsone.uz/uploads/photo-1667381096354.jpg",
      lavash_price: "29",
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

  const [loggedInName, setLoggedInName] = useState(null);

  let decrement = async (l) => {
    let count = localStorage.getItem(`l_count_${l.id}`);
    let price = localStorage.getItem(`price`);

    if (count == null) {
      count = 0;
      localStorage.setItem(`l_count_${l.id}`, count);
    }
    if (price == null) {
      price = 0;
      localStorage.setItem(`price`, price);
    }
    ++count;
    price = +price + +l.lavash_price;

    var found = false;

    for (var i = 0; i < lavashes.length; i++) {
      if (lavashes[i].id == +l.id) {
        found = true;
        break;
      }
    }

    if (found == false) {
      id.push(l.id);
      lavashes.push(l);
    }

    localStorage.setItem(`l_count_${l.id}`, count);
    localStorage.setItem(`id`, JSON.stringify(id));
    localStorage.setItem(`lavashs`, JSON.stringify(lavashes));

    window.localStorage.setItem("price", price);
    window.dispatchEvent(new Event("storage"));

    setLoggedInName(localStorage.getItem(`l_count_${l.id}`) || null);
    window.addEventListener("counts", storageEventHandler, false);

    function storageEventHandler() {
      setLoggedInName(localStorage.getItem(`l_count_${l.id}`) || null);
    }

    window.localStorage.setItem(`l_count_${l.id}`, count);
    window.dispatchEvent(new Event("counts"));
  };

  let increment = (l) => {
    let count = localStorage.getItem(`l_count_${l.id}`);
    let price = localStorage.getItem(`price`);

    if (count > 0) {
      --count;
    }

    if (price >= 0) {
      price = +price - +l.lavash_price;
    }
    let found = 0;
    if (count < 1) {
      for (var i = 0; i < lavashes.length; i++) {
        if (lavashes[i].id == +l.id) {
          found = i;
          break;
        }
      }

      if (found >= 0) {
        lavashes.splice(found, 1);
      }
    }

    localStorage.setItem(`l_count_${l.id}`, count);
    localStorage.setItem(`price`, price);
    localStorage.setItem(`lavashs`, JSON.stringify(lavashes));

    window.localStorage.setItem("price", price);
    window.dispatchEvent(new Event("storage"));

    setLoggedInName(localStorage.getItem(`l_count_${l.id}`) || null);
    window.addEventListener("counts", storageEventHandler, false);

    function storageEventHandler() {
      setLoggedInName(localStorage.getItem(`l_count_${l.id}`) || null);
    }

    window.localStorage.setItem(`l_count_${l.id}`, count);
    window.dispatchEvent(new Event("counts"));
  };
  useEffect(() => {
    tg.MainButton.hide();
  });
  return (
    <>
      <Home />
      <div id="lavash">
        <p>ozgardi</p>
        <div className="flex flexfor">
          {product.map((l, index) => (
            <div key={index} className="card">
              <img src={l.lavash_img} alt="lavash" />
              <p>{l.lavash_name}</p>
              <h6>UZS {l.lavash_price} 000,00</h6>
              <div className="flex">
                {localStorage.getItem(`l_count_${l.id}`) >= 1 ? (
                  <button className="increment" onClick={() => increment(l)}>
                    -
                  </button>
                ) : (
                  <button
                    disabled
                    style={{ backgroundColor: "silver" }}
                    onClick={() => increment(l)}
                    className="increment"
                  >
                    -
                  </button>
                )}
                {l.id ? localStorage.getItem(`l_count_${l.id}`) : "0"}
                <button onClick={() => decrement(l)} className="plus">
                  +
                </button>
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

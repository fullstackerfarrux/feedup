import React, { useEffect, useState } from "react";
import logo from "../assets/feeduplogo.png";
import { Link } from "react-router-dom";

const tg = window.Telegram.WebApp;

let lavashes = JSON.parse(localStorage.getItem("lavashs"));
const Oplata = () => {
  let all = localStorage.getItem("lavashs");

  let allCas = localStorage.getItem("price");

  let allCash = +allCas + 11;

  const [loggedInName, setLoggedInName] = useState(null);

  console.log(lavashes);

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
      lavashes.push(l);
    }

    localStorage.setItem(`l_count_${l.id}`, count);
    // localStorage.setItem(`id`, JSON.stringify(id));
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
    tg.MainButton.setParams({
      text: `Оплатить ${allCash} 000,00`,
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("price") > 0) {
      tg.MainButton.setParams({ color: "#ffa600", text_color: "#fff" });
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  });

  return (
    <div id="oplata">
      <div className="flex oplata-head">
        <Link to={"/"}>
          <i className="fa-solid fa-share fa-flip-horizontal back"></i>
        </Link>
        <img src={logo} alt="logo" />
      </div>
      <h2 className="oplata-h2">Оплатить удобным для вас способом</h2>

      <div className="post-settings">
        {JSON.parse(all).map((p, i) => (
          <div key={i} className="quantity">
            <p className="quantity-name">{p.lavash_name}</p>
            <img src={p.lavash_img} alt="" />
            <div className="quantity-price">
              <p>{p.lavash_price} 000,00 UZS</p>
              <div className="buttons">
                {localStorage.getItem(`l_count_${p.id}`) >= 1 ? (
                  <button
                    className="btn-minus increment"
                    onClick={() => increment(p)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    disabled
                    style={{ backgroundColor: "black" }}
                    onClick={() => increment(p)}
                    className="btn-minus increment"
                  >
                    -
                  </button>
                )}
                {p.id ? localStorage.getItem(`l_count_${p.id}`) : "0"}
                <button onClick={() => decrement(p)} className="btn-plus plus">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="delivery">
          <p className="delivery-name">Доставка</p>
          <p>11 000,00 UZS</p>
        </div>

        <div className="total">
          <p className="total-name">Общая сумма</p>
          <p>{allCash} 000,00 UZS</p>
        </div>
      </div>

      <div className="payment">
        <div className="payment-text">
          <p>Тип оплаты</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>

        <div className="payment-btn">
          <button className="have">Оплата наличными</button>
          <button className="payme">Оплата через Payme</button>
        </div>
      </div>
      {/* {buttonk()} */}
      {/* <div className="footer-oplatit">
        <button className="footer-btn">Oплатить {allCash} 000,00 UZS</button>
      </div> */}
    </div>
  );
};

export default Oplata;

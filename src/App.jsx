import Loading from "./Components/Loading";
import viteLogo from "/vite.svg";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Burger from "./Components/Burger";
import Lavash from "./Components/Lavash";
import Kombo from "./Components/Kombo";
import Sendvich from "./Components/Sendvich";
import Pizza from "./Components/Pizza";
import Napitka from "./Components/Napitka";
import Longer from "./Components/Longer";
import Sneki from "./Components/Sneki";
import Sous from "./Components/Sous";
import Vafli from "./Components/Vafli";

function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  setTimeout(() => {
    setIsAlertVisible(true);
  }, 3000);

  return (
    <>
      {/* LOADING */}
      {/* {!isAlertVisible ? <Loading /> : <h2>hi</h2>} */}
      <Routes>
        <Route path="/" element={<Lavash />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/kombo" element={<Kombo />} />
        <Route path="/sendvich" element={<Sendvich />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/napitki" element={<Napitka />} />
        <Route path="/longer" element={<Longer />} />
        <Route path="/sneki" element={<Sneki />} />
        <Route path="/sous" element={<Sous />} />
        <Route path="/vafli" element={<Vafli />} />
      </Routes>
    </>
  );
}

export default App;

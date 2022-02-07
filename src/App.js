import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { CoinsForSearch } from "./components/CoinsForSearch/CoinsForSearch";
import { TopFiveCoins } from "./components/TopFiveCoins/TopFiveCoins";

function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const getAllCoinsData = async () => {
      await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
        .then((response) => response.json())
        .then((data) => {
          setCoins(data);
        });
    };
    getAllCoinsData();
  }, []);
  return (
    <div className="app">
      <Header />
      {/* display top 5 coins*/}
      <div className="app_top">
        <TopFiveCoins coins={coins} />
      </div>

      {/* Total Market Cap*/}

      <div className="app_bottom">
        <div className="app_bottom--left">
          <CoinsForSearch coins={coins} />
        </div>
      </div>
      {/* Search for a Coin*/}

      {/* display top 5 coins in a side scroll bar*/}
    </div>
  );
}

export default App;

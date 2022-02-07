import React, { useState } from "react";
import "../CoinsForSearch/CoinsForSearch.css";
import { CoinSearch } from "../CoinSearch/CoinSearch";

export const CoinsForSearch = ({ coins }) => {
  const [search, setSearch] = useState([]);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    // coin.name.includes(search)
  );

  const searchCoins = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="searchforCoin__holder">
      <h3 className="searchforCoin__holder-header">Search For a Coin</h3>
      <form>
        <input
          type="text"
          placeholder="Coin Search"
          className="coin__search"
          onChange={searchCoins}
        />
      </form>
      <div className="searchforCoin__Coin-holder">
        {filteredCoins.map((coin) => (
          <CoinSearch
            key={coin.id}
            symbol={coin.symbol}
            image={coin.image}
            name={coin.name}
            current_price={coin.current_price}
            price_change_percentage_24h={coin.price_change_percentage_24h.toFixed(
              3
            )}
            last_updated={coin.last_updated}
            market_cap={coin.market_cap.toLocaleString()}
            total_supply={coin.total_supply}
            priceChange={coin.price_change_percentage_24h}
          />
        ))}
      </div>
    </div>
  );
};

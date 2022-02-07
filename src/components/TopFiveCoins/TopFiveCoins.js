import React from "react";
import "../TopFiveCoins/TopFiveCoins.css";
import { Coin } from "../Coin/Coin";

export const TopFiveCoins = ({ coins }) => {
  return (
    <div className="topFiveCoins__holder">
      <h3 className="topFiveCoins__holder-header">Top 5 Coins by Market Cap</h3>
      <div className="topFiveCoins">
        {coins.slice(0, 5).map((coin) => (
          <Coin
            key={coin.id}
            symbol={coin.symbol}
            image={coin.image}
            name={coin.name}
            current_price={coin.current_price}
            price_change_percentage_24h={coin.price_change_percentage_24h.toFixed(
              3
            )}
            last_updated={coin.last_updated}
            market_cap={coin.market_cap}
            total_supply={coin.total_supply}
            price_change_24h={coin.price_change_24h.toFixed(3)}
          />
        ))}
      </div>
    </div>
  );
};

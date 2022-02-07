import { React } from "react";
import "../Coin/Coin.css";
import "../CoinSearch/CoinSearch.css";

export const CoinSearch = ({
  image,
  name,
  current_price,
  price_change_percentage_24h,
}) => {
  return (
    <div className="coinSearchCoin">
      <div className="coinSearchCoin__image-holder">
        <img src={image} alt={name} className="coinSearchCoin__image" />
      </div>

      <div className="coinSearchCoin__current-name">
        <p>{name}</p>
      </div>

      <div className="coinSearchCoin__current-price">
        <p>${current_price}</p>
      </div>

      <div className="coinSearchCoin__pricing">
        {price_change_percentage_24h < 0 ? (
          <p className="coinSearchCoin-percent__red">
            <b>{price_change_percentage_24h}% </b>
          </p>
        ) : (
          <p className="coinSearchCoin-percent__green">
            <b>{price_change_percentage_24h}% </b>
          </p>
        )}
      </div>
    </div>
  );
};

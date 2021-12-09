import React, { useState, useEffect } from "react";
import axios from "axios";

import "./market.css";
import Line from '../Line';


const Market = () => {
  const [apiData, setApiData] = useState([]);

  const formatter = new Intl.NumberFormat("en-US");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(process.env.REACT_APP_COINGEC_API);
      setApiData(data);
    };

    getData();
  }, []);

  return (
    <div className="ptc__market">
      <div className="ptc__market-text">
        <h1>Today's Cryptocurrency Prices by Market Cap</h1>
        <p>
          {" "}Have a sneak peek at the top crypto assests before launching the
          DApp to predict
        </p>
      </div>

      <div className="ptc__market-table">
        <table id="customers">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>24 %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>Volume(24)</th>
              <th>Circulating Supply</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map(data => {
              return (
                <tr key={data.id}>
                  <td>{data.name.toUpperCase()} {data.symbol.toUpperCase()}</td>
                  <td>{formatter.format(data.current_price)}</td>
                  <td>{formatter.format(data.price_change_24h.toFixed(2))}</td>
                  <td>{formatter.format(data.price_change_percentage_7d_in_currency)}</td>
                  <td>{formatter.format(data.market_cap)}</td>
                  <td>{formatter.format(data.total_volume)}</td>
                  <td>{formatter.format(parseInt(data.total_volume / data.current_price))} {data.symbol.toUpperCase()}</td>
                  <td><Line/></td>
                  {/* <td>{formatter.format(data.circulating_supply)} {data.symbol.toUpperCase()}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Market;
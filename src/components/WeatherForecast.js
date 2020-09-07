import React from "react";

import ForecastCards from "./ForecastCards";
import Dashboard from "./Dashboard";

const WeatherForecast = ({ data }) => {

    const { city, list } = data;
    const { name } = city;
  
    return (
      <div className="weather-forecast-wrapper">
        <Dashboard city={name} />
        <ForecastCards forecasts={list} />
      </div>
    );
};

export default WeatherForecast;
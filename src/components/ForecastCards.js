import React, { Component } from "react";

export default class ForecastCards extends Component {
  _groupByDays = data => {
    return (data.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0,10);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);
      console.log('forecast date', forecastDate)
      return list;
    }, {}));
    
  };

  _getDayInfo = data => {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    console.log("data", data)
    return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
  };

  _getIcon = data => `https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;

  _getWInfo = data => `${data[0].weather[0].description}`

  _getInfo = (data, min=[], max=[]) => {
    data.map(item => {
      max.push(item.main.temp_max);
      min.push(item.main.temp_min);
    });

    const minMax = {
      min: Math.round(Math.min(...min)),
      max: Math.round(Math.max(...max)),
    };

   
    return (
      <div className="weather-info">
        <div className="min-max">
          <strong>{`${minMax.max}°C`}</strong> / {`${minMax.min}°C`}
        </div>
      </div>
    );
  };


  render() {

    const { forecasts } = this.props;
    const cards = Object.values(this._groupByDays(forecasts));

    const forecastCards = cards.length > 10 ? cards.slice(0, 10) : cards;

    console.log('forecastCards', forecastCards)

    return (
      <div className="forecast-cards">
        {forecastCards.map((item, i) => (
          <div
            className={`forecast-card card-${i}`}
            key={i}
            ref={`div-${i}`}
          >
            <div className="primary-info">
              <div className="icon">
                <img src={this._getIcon(item)} />
                <p>{this._getWInfo(item)}</p>
                {this._getDayInfo(item)}
              </div>
              {this._getInfo(item)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}


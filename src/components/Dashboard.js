import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/weatherStation";
import '../styles/weather.scss';

 class Dashboard extends Component {

  _updateLocation = () => {
    const city = this.__cityInput.value;
   return  city.length !== 0 ? this.props.dispatch(fetchData(city)) : null;
  }

  _onkeyPress = e => {
   return  e.key === "Enter" ? this._updateLocation() : null
  }

  render() {

    const { city, status } = this.props;
    const wrapperClass = (status === "failed") ? "weather-dashboard invalid-city" : "weather-dashboard";
    console.log("city", city, this.props)

    return (
      <div className={wrapperClass}>
        <header>
          <h1 className="heading"> Weather Forecast</h1>
        </header>
        <section className="controls">
          <div>
            <input
              type="text"
              className="city-input"
              id="city-name"
              ref={input => {
                this.__cityInput = input;
                return this.__cityInput;
              }}
              onKeyPress={this._onkeyPress}
              placeholder={city}
            />
            <button className="search" id="change-city-btn" onClick={this._updateLocation}>Get Weather</button>
          </div>
        </section>
        <span className="error">Please enter valid city name!</span>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return { status: state.weatherStation.status }
}

export default connect(mapStateToProps)(Dashboard)

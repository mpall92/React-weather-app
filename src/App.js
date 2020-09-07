import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchData } from "./actions/weatherStation";

import WeatherForecast from './components/WeatherForecast';

 class App extends Component {

  componentDidMount() {  
    const detectLocation = new Promise((resolve,reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve(position.coords);
        }, (error) => {
          if(error.code === error.PERMISSION_DENIED) {
            console.error("Error detecting location.");
          }
        });
      }
    });

    detectLocation.then((location) => {
      this.props.dispatch(fetchData(location));
    }).catch(() => {
      this.props.dispatch(fetchData("Mumbai"));
    });
  }

  render() {
    const { forecast } = this.props;
    console.log('forecast', forecast)

    return (
      forecast === null ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <WeatherForecast data={forecast} />
        </div>
      )
    );
  }
}

function mapStateToProps(state) {
  const { weatherStation } = state
  return { forecast: weatherStation.data }
}

export default connect(mapStateToProps)(App)
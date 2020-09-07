import React from "react";
import { shallow } from "enzyme";
import WeatherForecast from "../components/WeatherForecast";
import Dashboard from "../../components/Dashboard";
import data from "./data/forecast.json";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe("<WeatherForecast />", () => {
  it("should render a div with `.weather-forecast-wrapper` class", () => {
    const wrapper = shallow(<WeatherForecast data={data.weatherStation.data} />);
    expect(wrapper.hasClass("weather-forecast-wrapper")).toBe(true);
  });

  it("should contain a dashboard", () => {
    const wrapper = shallow(<WeatherForecast data={data.weatherStation.data} />);
    expect(wrapper.find(Dashboard)).toHaveLength(1);
  });
});
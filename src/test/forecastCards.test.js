import React from "react";
import { render } from "enzyme";
import ForecastCards from "../components/ForecastCards";
import configureStore from "redux-mock-store";
import data from "./data/forecast.json";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
const mockStore = configureStore();
const { list } = data.weatherStation.data;



describe("<ForecastCards />", () => {
  it("should render a forecast-tiles container div", () => {
    const wrapper = render(<ForecastCards store={mockStore()} forecasts={list}/>);
    expect(wrapper.hasClass("forecast-cards")).toBe(true);
  });

  it("should render five forecast tiles", () => {
    const wrapper = render(<ForecastCards store={mockStore()} forecasts={list}/>);
    expect(wrapper.children().length).toBe(6);
  });
});
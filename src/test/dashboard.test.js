import React from "react";


import { render} from "enzyme";
import Dashboard from "../components/Dashboard";
import configureStore from "redux-mock-store";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const mockStore = configureStore();
const STATUS = "success";

describe("<Dashboard />", () => {
  it("renders an `.weather-dashboard`", () => {
    const wrapper = render(<Dashboard store={mockStore({ weatherStation: {status: STATUS}})} />);
    expect(wrapper.hasClass("weather-dashboard")).toBe(true);
  });

  it("should contain a input field", () => {
    const wrapper = render(<Dashboard store={mockStore({ weatherStation: {status: STATUS}})} />);
    expect(wrapper.find(".city-input")).toHaveLength(1);
  });

  it("should contain a change city button", () => {
    const wrapper = render(<Dashboard store={mockStore({ weatherStation: {status: STATUS}})} />);
    expect(wrapper.find("#change-city-btn")).toHaveLength(1);
  });

  // it("should receive city prop", () => {
  //   const wrapper = shallow(<Dashboard city="Mumbai" store={mockStore({ weatherStation: {status: STATUS}})} />);
  //   expect(wrapper.prop("city")).toBeDefined();
  // });
});
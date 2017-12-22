import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import { Pane } from "../src/Pane";

describe("minimized pane", () => {
  const maximize = jest.fn();
  const wrapper = shallow(
    <Pane title="test" maximize={maximize} index={1} isMaximized={false}>
      <h2>Hello World</h2>
      <div>Hello World</div>
    </Pane>
  );
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Pane title="test" maximize={maximize} index={1} isMaximized={false}>
        <h2>Hello World</h2>
        <div>Hello World</div>
      </Pane>,
      div
    );
  });
  it("shows the correct button title", () => {
    expect(wrapper.find("button").text()).toEqual("test");
  });
  it("does not show the content", () => {
    expect(wrapper.find("h2")).toHaveLength(0);
  });
  it("calls the maximize function on click", () => {
    wrapper.find("button").simulate("click");
    expect(maximize.mock.calls).toHaveLength(1);
  });
  it("passes its index prop into the maximize method", () => {
    expect(maximize.mock.calls[0][0]).toBe(1);
    const max2 = jest.fn();
    const anotherPane = shallow(
      <Pane title="test" maximize={max2} index={3} isMaximized={false}>
        <h2>Hello World</h2>
        <div>Hi</div>
      </Pane>
    );
    anotherPane.find("button").simulate("click");
    expect(max2.mock.calls[0][0]).toBe(3);
  });
  it("has the appropriate class", () => {
    expect(wrapper.find(".eui__acc-pane")).toHaveLength(1);
    expect(wrapper.find(".eui__max")).toHaveLength(0);
  });
});

describe("maximized pane", () => {
  const maximize = jest.fn();
  const wrapper = shallow(
    <Pane title="test" maximize={maximize} index={1} isMaximized={true}>
      <h2>Hello World</h2>
      <div>Hello World</div>
    </Pane>
  );
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Pane title="test" maximize={maximize} index={1} isMaximized={true}>
        <h2>Hello World</h2>
        <div>Hello World</div>
      </Pane>,
      div
    );
  });
  it("shows the content", () => {
    expect(wrapper.find("h2")).toHaveLength(1);
  });
  it("has the appropriate class", () => {
    expect(wrapper.find(".eui__acc-pane")).toHaveLength(1);
    expect(wrapper.find(".eui__max")).toHaveLength(1);
  });
});

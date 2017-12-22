import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";

import { singlePane, multiPane } from "./sampleComponents";

describe("Single pane accordion", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(singlePane, div);
  });
  it("displays the panes it is given", () => {
    const wrapper = shallow(singlePane);
    expect(wrapper.find("Pane")).toHaveLength(3);
  });
  it("expands one pane at a time", () => {
    const wrapper = mount(singlePane);
    wrapper.find("button").forEach(button => {
      button.simulate("click");
    });
    expect(wrapper.find("h2")).toHaveLength(1);
  });
  it("changes panes when each pane is clicked", () => {
    const wrapper = mount(singlePane);
    wrapper
      .find("button")
      .first()
      .simulate("click");
    const firstPane = wrapper.find("h2").text();
    wrapper
      .find("button")
      .last()
      .simulate("click");
    expect(firstPane).not.toBe(wrapper.find("h2").text());
  });
  it("displays the active pane's content", () => {
    const wrapper = mount(singlePane);
    wrapper
      .find("button")
      .first()
      .simulate("click");
    expect(wrapper.find("h2").text()).toEqual("First Pane");
    wrapper
      .find("button")
      .last()
      .simulate("click");
    expect(wrapper.find("h2").text()).toEqual("Third Pane");
  });
  it("has the id it has been passed", () => {
    const wrapper = shallow(singlePane);
    expect(wrapper.find("#singlepane-acc")).toHaveLength(1);
  });
  it("is given the correct class for the type of accordion it is", () => {
    const wrapper = mount(singlePane);
    expect(wrapper.find(".eui__singlepane-acc")).toHaveLength(1);
  });
});

describe("Multi pane accordion", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(multiPane, div);
  });
  it("expands more than one pane at a time", () => {
    const wrapper = mount(multiPane);
    wrapper.find("button").forEach(button => {
      button.simulate("click");
    });
    expect(wrapper.find("h2")).toHaveLength(3);
  });
  it("closes each pane on click", () => {
    const wrapper = mount(multiPane);
    wrapper.find("button").forEach(button => {
      button.simulate("click");
    });
    wrapper.find("button").forEach(button => {
      button.simulate("click");
    });
    expect(wrapper.find("h2")).toHaveLength(0);
  });
  it("displays each active pane's content", () => {
    const wrapper = mount(multiPane);
    wrapper.find("button").forEach(button => {
      button.simulate("click");
    });
    const titles = ["First Pane", "Second Pane", "Third Pane"];
    wrapper.find("h2").forEach((h2, index) => {
      expect(h2.text()).toEqual(titles[index]);
    });
  });
  it("has the correct class for the type of accordion it is", () => {
    const wrapper = shallow(multiPane);
    expect(wrapper.find(".eui__multipane-acc")).toHaveLength(1);
  });
});

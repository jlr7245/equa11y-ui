import React from "react";
import { shallow } from "enzyme";

import { Button } from "../src/Button";

it("renders correct title test", () => {
  const wrapper = shallow(<Button title="hello" />);
  expect(wrapper.text()).toBe("hello");
});

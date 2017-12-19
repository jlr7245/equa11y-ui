import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button } from "../src/Button";
import { Dropdown } from "../src/Dropdown";
import { Dropitem } from "../src/Dropitem";

storiesOf("Button", module).add("with title", () => (
  <Button title={"hello"} onClick={action("clicked")} />
));
storiesOf("Dropdown", module).add("isHoverable", () => (
  <Dropdown title="hello" id="drop" isHoverable={true}>
    <Dropitem>One</Dropitem>
    <Dropitem>Two</Dropitem>
    <Dropitem>Three</Dropitem>
  </Dropdown>
));
storiesOf("Dropdown", module).add("not isHoverable", () => (
  <Dropdown title="hello" id="drop" isHoverable={false}>
    <Dropitem>One</Dropitem>
    <Dropitem>Two</Dropitem>
    <Dropitem>Three</Dropitem>
  </Dropdown>
));

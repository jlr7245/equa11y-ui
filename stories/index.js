import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button } from "../src/Button";
import { Dropdown } from "../src/Dropdown";
import { Dropitem } from "../src/Dropitem";

import { Accordion } from "../src/Accordion";
import { Pane } from "../src/Pane";

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
storiesOf("Accordion", module).add("Single expanded", () => (
  <Accordion id="singlepane-accordion" isMultiPane={false}>
    <Pane title="Pane 1">
      <h1>Here is my first accordion pane</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante
        metus, dignissim eu sapien vitae, finibus tristique arcu. Quisque
        sollicitudin velit a purus venenatis venenatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante
        metus, dignissim eu sapien vitae, finibus tristique arcu. Quisque
        sollicitudin velit a purus venenatis venenatis.
      </p>
    </Pane>
    <Pane title="Pane 2">
      <h2>Second Pane</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante
        metus, dignissim eu sapien vitae, finibus tristique arcu. Quisque
        sollicitudin velit a purus venenatis venenatis.
      </p>
    </Pane>
    <Pane title="Pane 3">
      <h2>Third Pane</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante
        metus, dignissim eu sapien vitae, finibus tristique arcu. Quisque
        sollicitudin velit a purus venenatis venenatis.
      </p>
    </Pane>
  </Accordion>
));
storiesOf("Accordion", module).add("Multi expanded", () => (
  <Accordion id="multipane-accordion" isMultiPane={true}>
    <Pane title="Pane 1">
      <h1>Here is my first accordion pane</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante
        metus, dignissim eu sapien vitae, finibus tristique arcu. Quisque
        sollicitudin velit a purus venenatis venenatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante
        metus, dignissim eu sapien vitae, finibus tristique arcu. Quisque
        sollicitudin velit a purus venenatis venenatis.
      </p>
    </Pane>
    <Pane title="Pane 2">
      <h2>Second Pane</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante
        metus, dignissim eu sapien vitae, finibus tristique arcu. Quisque
        sollicitudin velit a purus venenatis venenatis.
      </p>
    </Pane>
    <Pane title="Pane 3">
      <h2>Third Pane</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante
        metus, dignissim eu sapien vitae, finibus tristique arcu. Quisque
        sollicitudin velit a purus venenatis venenatis.
      </p>
    </Pane>
  </Accordion>
));

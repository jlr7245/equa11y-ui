import React from "react";

import { Accordion } from "../src/Accordion";
import { Pane } from "../src/Pane";

export const singlePane = (
  <Accordion id="singlepane-acc" isMultiPane={false}>
    <Pane title="Pane 1">
      <h2>First Pane</h2>
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
);

export const multiPane = (
  <Accordion id="multipane-acc" isMultiPane={true}>
    <Pane title="Pane 1">
      <h2>First Pane</h2>
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
);

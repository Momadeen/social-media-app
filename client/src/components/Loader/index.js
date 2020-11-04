import React from "react";
import {
  Dimmer,
  Loader as SemanticLoader,
  Segment,
} from "semantic-ui-react";

const Loader = () => (
  <Segment inverted>
    <Dimmer active inverted>
      <SemanticLoader size="large">Loading</SemanticLoader>
    </Dimmer>
  </Segment>
);

export default Loader;

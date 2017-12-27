import React from 'react';
import PropTypes from "prop-types";
import { Grid, Segment } from "semantic-ui-react";

const Column = ({ properties }) => (
  <Grid.Column>
    <Segment>{properties}</Segment>
  </Grid.Column>
);

Column.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Column;

import React from "react";
import { Segment } from "semantic-ui-react";
import "./App.css";
import Page from "./components/Page";
import PropertyData from "./data/PropertyData";

const App = () => (
  <Segment>
    <header>
      <h1 className="App-title">REA UI Test</h1>
    </header>

    <Page propertyData={PropertyData} />
  </Segment>
);

export default App;

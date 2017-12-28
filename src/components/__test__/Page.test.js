import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Page from "../Page";

describe("Page", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const propertyData = {
      results: [],
      saved: []
    };
    ReactDOM.render(<Page propertyData={propertyData} />, div);
  });

  it("initialize state correctly", () => {
    const propertyData = {
      results: [],
      saved: [{ id: "test1" }, { id: "test2" }]
    };

    const output = shallow(<Page propertyData={propertyData} />);

    expect(output.state().savedIds).toEqual(["test1", "test2"]);
  });

  it("method allProperties() works", () => {
    const expectedResult = [
      { id: "test3" },
      { id: "test4" },
      { id: "test1" },
      { id: "test2" }
    ];

    const propertyData = {
      results: [expectedResult[0], expectedResult[1]],
      saved: [expectedResult[2], expectedResult[3]]
    };

    const output = shallow(<Page propertyData={propertyData} />);

    expect(output.instance().allProperties()).toEqual(expectedResult);
  });
});

// index.test.js
import React from "react";
import App from "./index";
import renderer from "react-test-renderer";

test("it renders", () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// index.test.js
import React from "react";
import App from "./index";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render, mount } from "enzyme";
import sinon, { stub } from "sinon";
import Adapter from "enzyme-adapter-react-16";

// React 16 Enzyme Adapter
Enzyme.configure({ adapter: new Adapter() });

it("should render", () => {
  const onStateSelect = stub();
  const component = renderer.create(<App onChange={onStateSelect} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render without a default option if default option is turned off", () => {
  const onStateSelect = stub();
  const wrapper = mount(<App onChange={onStateSelect} hasDefaultOption={false} />);
  const select = wrapper.find("select");
  expect(select.contains(<option value="null">Select a state ...</option>)).toEqual(false);
});

it("should render with the default option text specified", () => {
  const onStateSelect = stub();
  const wrapper = mount(<App onChange={onStateSelect} defaultOptionText={"State ..."} />);
  const select = wrapper.find("select");
  expect(select.contains(<option value="null">State ...</option>)).toEqual(true);
});

it("should render with a custom formatted label", () => {
  const onStateSelect = stub();
  const component = renderer.create(<App onChange={onStateSelect} valueTemplate={"[ABBR] - [STATE]"} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

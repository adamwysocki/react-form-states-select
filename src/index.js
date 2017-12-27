/* @flow */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { states } from "./data/us-states";

/**
 * Some constants.
 */
const NAME_LITERAL = "[NAME]";
const ABBR_LITERAL = "[ABBR]";
const DEFAULT_OPTION_STRING = "Select a state ...";

/**
 * Styles for select dropdown.
 */
const StateSelect = styled.select`
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;

/**
 * Type definition for class props.
 */
type Props = {
  defaultOptionText?: string,
  hasDefaultOption?: boolean,
  valueTemplate?: string,
  onChange: Function
};

/**
 * React class for state select in a form
 * @class StatesSelect
 */
class StatesSelect extends React.Component<Props> {
  /**
   * @memberof StatesSelect
   * @static
   */
  static defaultProps = {
    hasDefaultOption: true,
    defaultOptionText: DEFAULT_OPTION_STRING,
    valueTemplate: NAME_LITERAL
  };

  /**
   * @memberof StatesSelect class.
   * @static
   * @property {bool} [hasDefaultOption] - Toggles default option on/off.
   * @property {string} [defaultOptionText] - Customized text for the default option.
   * @property {string} [valueTemplate] - Customized template for the "value" in each select option.
   */
  static propTypes = {
    hasDefaultOption: PropTypes.bool,
    defaultOptionText: PropTypes.string,
    valueTemplate: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  /**
   * Parse the template passed in to display each option's "value".
   * @memberof StatesSelect class.
   * @param {string} template - The template passed into the component.
   * @param {string} stateName - The name of the state from the current iteration.
   * @param {string} stateAbbreviation - The two charater abbreviation for the state from the current iteration.
   */
  parseTemplate = (template: string, stateName: string, stateAbbreivation: string) => {
    template = template.replace(NAME_LITERAL, stateName);
    template = template.replace(ABBR_LITERAL, stateAbbreivation);
    return template;
  };

  change = (event: SyntheticEvent<HTMLSelectElement>) => {
    const index = event.currentTarget.value;
    if (index === "null") return;
    const selectedState = states[index];
    this.props.onChange(selectedState);
  };

  /**
   * React render method.
   * @return {string} - HTML markup for the component.
   */
  render() {
    let defaultOption = <option value="null">{this.props.defaultOptionText}</option>;

    if (!this.props.hasDefaultOption) {
      defaultOption = null;
    }
    return (
      <div>
        <StateSelect id="state" name="state" onChange={this.change}>
          {defaultOption}
          {states.map((state, i) => {
            const valueTemplate = this.props.valueTemplate || NAME_LITERAL;
            return (
              <option key={state.name} value={i}>
                {this.parseTemplate(valueTemplate, state.name, state.abbreviation)}
              </option>
            );
          })}
        </StateSelect>
      </div>
    );
  }
}

export default StatesSelect;

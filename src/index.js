/* @flow */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { states } from "./data/us-states";

const NAME_LITERAL = "[NAME]";
const ABBR_LITERAL = "[ABBR]";
const DEFAULT_OPTION_STRING = "Select a state ...";

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

type Props = {
  defaultOptionText?: string,
  hasDefaultOption?: boolean,
  valueTemplate?: string
};

class StatesSelect extends React.Component<Props> {
  static defaultProps = {
    hasDefaultOption: true,
    defaultOptionText: DEFAULT_OPTION_STRING,
    valueTemplate: NAME_LITERAL
  };

  static propTypes = {
    hasDefaultOption: PropTypes.bool,
    defaultOptionText: PropTypes.string,
    valueTemplate: PropTypes.string
  };

  parseTemplate = (template: string, stateName: string, stateAbbreivation: string) => {
    template = template.replace(NAME_LITERAL, stateName);
    template = template.replace(ABBR_LITERAL, stateAbbreivation);
    return template;
  };

  render() {
    let defaultOption = <option value="null">{this.props.defaultOptionText}</option>;

    if (!this.props.hasDefaultOption) {
      defaultOption = null;
    }
    return (
      <div>
        <StateSelect id="state" name="state">
          {defaultOption}
          {states.map(state => {
            const valueTemplate = this.props.valueTemplate || NAME_LITERAL;
            return (
              <option key={state.name} value={state.abbreviation}>
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

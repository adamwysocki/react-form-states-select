# react-form-states-select

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[ ![Codeship Status for adamwysocki/react-form-states-select](https://app.codeship.com/projects/0f13f5d0-cd5a-0135-da01-166a8e542bbe/status?branch=master)](https://app.codeship.com/projects/262034)

A React select component that displays contains the 50 US states (plus territories) and fires a callback when a new one is selected.

## Installation

```sh
yarn add react-form-states-select

- or -

npm install react-form-states-select
```

## Usage

1 . Require react-form-states-select after installation

```js
import StatesSelect from "react-form-states-select";
```

2 . Include react-form-states-select component

```js
onStateSelect = (event, state) => {
    // event {SyntheticEvent<HTMLSelectElement>} - React HTML event
    // state {Object} - Object representing the state
    // state.name {string} - The full name of the selected state
    // state.abbreviation {string} - The two letter abbreviation of the states name
}

<StatesSelect onChange={this.onStateSelect} />
```

## Parameters

| Parameter         | Type       | Description                                                                                                                                                                                                                                                                               |
| :---------------- | :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onChange          | `Function` | Callback with the selected state. Parameters are the HTML event and an object with the format { name: 'Maryland', abbreviation: 'MD' }                                                                                                                                                    |
| defaultOptionText | `String`   | The label to display for the default/unselected option. A user selecting this option will not fire the callback. (default: "Select a state ...")                                                                                                                                          |
| hasDefaultOption  | `Boolean`  | Toggle the default option on or off (default: true)                                                                                                                                                                                                                                       |
| valueTemplate     | `String`   | A template to customize how the label in the drop down is displayed. [NAME] will display the full state name. [ABBR] will display the two character state abbreviation. (default: [NAME]). These can be used in combination. ie. "([ABBR]) - [NAME]" which will display "(MD) - Maryland" |

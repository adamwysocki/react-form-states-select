# react-form-states-select

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

A state select component for React

## Installation

```sh
npm install react-form-states-select
```

## Usage

**Using NPM**

1 . Require react-form-states-select after installation

```js
import StatesSelect from "react-form-states-select";
```

2 . Include react-form-states-select component

```js
onStateSelect = (event, state) => {
    // event {SyntheticEvent<HTMLSelectElement>} - React HTML event
    // state {object} - Object representing the state
    // state.name {string} - The full name of the selected state
    // state.abbreviation {string} - The two letter abbreviation of the states name
}

<StatesSelect onChange={this.onStateSelect} />
```

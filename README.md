# react-form-states-select

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[ ![Codeship Status for adamwysocki/react-form-states-select](https://app.codeship.com/projects/0f13f5d0-cd5a-0135-da01-166a8e542bbe/status?branch=master)](https://app.codeship.com/projects/262034)

A state select component for React

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

| Parameter         | Type       | Description |
| :---------------- | :--------- | :---------- |
| onChange          | `Function` |             |
| defaultOptionText | `String`   |             |
| hasDefaultOption  | `Boolean`  |             |
| valueTemplate     | `String`   |             |

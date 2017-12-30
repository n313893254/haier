import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './main';

import {createStoreProvider} from './main'
const store = createStoreProvider()
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store}/>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

// Hot Module Replacement API
console.log(module.hot)
if (module.hot) {
  module.hot.accept('./main', () => {
    var nextApp = require('./main').default
    render(nextApp)
  });
}
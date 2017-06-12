import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import config from 'react-global-configuration';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

config.set({
  rain_data_site: 'http://raindata.gsat.technology',
  rain_data_api: 'https://82kwih4tf7.execute-api.ap-southeast-2.amazonaws.com/LATEST'
});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

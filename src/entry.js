import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import CommentBoxContainer from './containers/commentBoxContainer';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <CommentBoxContainer />
  </Provider>,
  document.getElementById('content')
);

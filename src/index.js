import _ from 'lodash';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import RouterApp from './components/router'


render(
  <Provider store={store}>
    <RouterApp />
  </Provider>,
  document.getElementById('app')
)

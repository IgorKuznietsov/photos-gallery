import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { middleware, AppNavigator } from './src/navigators/RootNavigator'
import rootReducer from './src/reducers'

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(middleware), 
    applyMiddleware(thunk)
  )
)

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <AppNavigator/>
      </Provider>
    )
  }
}

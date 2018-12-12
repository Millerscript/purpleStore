import React, {Component} from 'react';
import { AppContainter } from './src/Navigation';
import {Provider} from 'react-redux'; // es la forma que tiene react de enlazar el State que creamos con Redux y React-native
import {createStore, applyMiddleware} from 'redux'; // Es lo que engloba el estado de nuestra aplicación y conecta con los reducers
import thunk from 'redux-thunk';
import Reducers from './reducers'

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStore(Reducers, applyMiddleware(thunk))}>
        <AppContainter/>
      </Provider>
    );
  }
}

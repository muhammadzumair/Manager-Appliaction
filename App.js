import React from 'react'
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers'
import firebase from 'firebase';
import Router from './src/Router'

export default class App extends React.Component {
  componentWillMount(){
    var config = {
    apiKey: "AIzaSyCAPc53oE0nERYELGO3qwnB3IDo9tDoTnI",
    authDomain: "managerapp-73b67.firebaseapp.com",
    databaseURL: "https://managerapp-73b67.firebaseio.com",
    projectId: "managerapp-73b67",
    storageBucket: "managerapp-73b67.appspot.com",
    messagingSenderId: "791491672673"
  };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
       <Router />
      </Provider>
    );
  }
}
 

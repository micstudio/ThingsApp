import React, { Component } from 'react';
import AppNavBar from '../src/components/AppNavBar';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PizzaList from './components/PizzaList';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <PizzaList />
        </div>
      </Provider>
    );
  }
}

export default App;

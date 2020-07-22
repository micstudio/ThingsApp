import React from 'react';
import AppNavBar from '../src/components/AppNavBar';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PizzaList from './components/PizzaList';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavBar />
      <PizzaList />
    </div>
    </Provider>
  );
}

export default App;

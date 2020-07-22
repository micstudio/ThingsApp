import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PizzaList from './components/PizzaList';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PizzaList />
    </div>
    </Provider>
  );
}

export default App;

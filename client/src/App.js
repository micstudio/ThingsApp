import React from 'react';
import AppNavBar from '../src/components/AppNavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PizzaList from './components/PizzaList';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <PizzaList />
    </div>
  );
}

export default App;

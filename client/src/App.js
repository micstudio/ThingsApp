import React, { Component } from 'react';
import AppBar from './components/AppBar';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AppList from './components/AppList';
import Login from './components/auth/LoginModal';

class App extends Component {


  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        
        <div className="App">
        <Login />
          <div className="row">
              <div className="col-12 col-md-4">
                <AppBar />
              </div>    
              <div className="col-12 col-md-8 applist">
                <AppList />
              </div>
           
          </div>
        </div>
      </Provider>
    );
  }
}

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// })

export default App;

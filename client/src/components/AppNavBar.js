import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import RegisterModal from './auth/RegisterModal';
import Logout from '../components/auth/Logout';
import Login from '../components/auth/LoginModal';



class AppNavBar extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };
  
  render() {
    const { isAuthenticated, user } = this.props.auth
    
    const authLink = (
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-3">
            <strong>{ user ? `WELCOME ${user.name}` : null }</strong>
          </span>
        </NavItem>
        <NavItem>
              <Logout />
            </NavItem>
      </Fragment>
    )

    const guestLinks = (
      <Fragment>
         <NavItem>
              <Login />
            </NavItem> <NavItem>
              <RegisterModal />
            </NavItem>
      </Fragment>
    )
    return (
      
      <div>
      {console.log(isAuthenticated)}
        
      <Navbar color="light" light expand="md">
        <NavbarToggler />
        <Collapse  navbar>
          <Nav className="mr-auto" navbar>
            {isAuthenticated ? authLink : guestLinks}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
  
}


const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps,null)(AppNavBar);

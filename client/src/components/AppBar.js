import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';
import userface from '../assets/user-face.png';

class AppNavBar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLink = (
      <>
        <strong>{user ? `WELCOME ${user.name}` : null}</strong>
        <Logout />
      </>
    );

    const guestLinks = (
      <>
        <RegisterModal />
      </>
    );

    const sidebar = (
      <div className="sidebar">
          <div className="sidebar__logo">
            <span><i>Things</i></span>
          </div>
          <div className="sidebar-profile text-center">
            <img src={userface} alt="" />
          </div>
          <div className="sidebar-login text-center">
            {isAuthenticated ? authLink : guestLinks}
          </div>
        </div>
    )
    return (
      <div>
        {isAuthenticated ? sidebar : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavBar);

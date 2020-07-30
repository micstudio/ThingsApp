import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import logoutIco  from '../../assets/logout.png';
import PropTypes from 'prop-types';

class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }
    render() {
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} >
                    <a href="/"><img className="pt-3" src={logoutIco} alt="logout" /></a>
                </NavLink>
            </Fragment>
        );
    }
}

export default connect(null, {logout})(Logout);
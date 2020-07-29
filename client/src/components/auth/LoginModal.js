import React, { Component } from 'react';
import { login } from '../../actions/authActions';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LoginModal extends Component {
  state = {
    modal: false,
    email: '',
    password: '',
    msg: null,
  };

    static propTypes = {
      isAuthenticated: PropTypes.bool,
      error: PropTypes.object.isRequired,
      login: PropTypes.func.isRequired
    };

   
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    
    const user = {
        email,
        password
    }

    this.props.login(user)

    //attept to login ^^^^
    

  };

  render() {
    return (
        <div>
        {/* {    alert(this.state.item)} */}
      <NavLink onClick={this.toggle} href="#">
        Login
      </NavLink>

      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Login</ModalHeader>
        <ModalBody>
            {/* {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null} */}
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
            <label for="name">email</label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                onChange={this.onChange}
              />

              <label for="name">Password</label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={this.onChange}
              />
            </FormGroup>
            <Button color="dark" block>
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
    )
    
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  item: state.item.kozi
});
export default connect(mapStateToProps, {login})(LoginModal);

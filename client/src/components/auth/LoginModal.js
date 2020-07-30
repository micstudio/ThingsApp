import React, { Component } from 'react';
import { login } from '../../actions/authActions';
import Logo from '../../assets/logo.png';

import {
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LoginModal extends Component {
  state = {
    modal: true,
    email: '',
    password: '',
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
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
      password,
    };

    this.props.login(user);

    //attept to login ^^^^
    this.toggle();
  };



  render() {
    const {isAuthenticated} = this.props


    const modal = (
      <Modal
      isOpen={this.state.modal}
      toggle={this.toggle}
      backdrop="static"
      className="modal-login"
    >
      <ModalBody className=" text-center">
        {/* {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null} */}

        <div className="d-flex justify-content-center ">
          <img src={Logo} alt="fireSpot" />
        </div>
        <h3 className="mt-3">LOGIN</h3>
        <h5>Please sign to continue</h5>

        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              onChange={this.onChange}
            />

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
    )
    return (
      <div>
        {isAuthenticated ? null : modal }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  item: state.item.kozi,
});
export default connect(mapStateToProps, { login })(LoginModal);

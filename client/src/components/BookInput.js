import React, { Component } from 'react';
import { addItem } from '../actions/index';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';

import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  FormGroup,
  FormGroupProps,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';

class BookInput extends Component {
  state = {
    wartosc: '',
  };

  sumbit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: this.state.wartosc,
    };

    this.props.addItem(newItem);
  };

  handlerClick = (e) => {
    e.preventDefault();
    this.setState({
      wartosc: e.target.value,
    });
  };
  render() {
    const { removeItem } = this.props;
    return (
      <div>
        <Form onSubmit={this.sumbit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              placeholder="with a placeholder"
              onChange={this.handlerClick}
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (a) => dispatch(addItem(a)),
});

export default connect(null, mapDispatchToProps)(BookInput);

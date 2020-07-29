import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  Input,
  ListGroupItem,
  Button,
  Form,
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getPizza, deleteItem, addItem } from '../actions/itemAction';
import PropTypes from 'prop-types';

class PizzaList extends Component {
  state = {
    value: '',
  };

  handlerInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.value,
    };
    this.props.addItem(newItem);

    this.setState({
      value:'',
    })
  };

  componentDidMount() {
    this.props.getPizza();
  }

  render() {
    const { items } = this.props.item;
    const { isAuthenticated } = this.props;

    const container = (
      <Container class="applist">
        <div className="input-100">
          <Form className="form" onSubmit={this.onSubmit}>
            <Input value={this.state.value} placeholder="add thing to list" onChange={this.handlerInput} />
          </Form>
        </div>

        <ListGroup>
          <TransitionGroup>
            {items.map(({ name, _id, desc }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem className="items">
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
    return <>{isAuthenticated ? container : null}</>;
  }
}

PizzaList.propTypes = {
  getPizza: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { getPizza, deleteItem, addItem })(
  PizzaList
);

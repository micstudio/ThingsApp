import React, { Component } from 'react';
import { Container, ListGroup,Input, ListGroupItem, Button, Form } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { getPizza, deleteItem, addItem } from '../actions/itemAction';
import PropTypes from 'prop-types';

class PizzaList extends Component {

  state = {
    value: '',
  }

  handlerInput = (e) => {
   this.setState( {
     value: e.target.value
   })
  }
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  onSubmit = (e) => {
    e.preventDefault()

    const newItem = {
      id: uuid(),
      name: this.state.value
    }

    this.props.addItem(newItem);
  }

  componentDidMount(){
    this.props.getPizza();
  }
  
  render() {
    
    const { items } = this.props.item;
    return (
      <Container>
        {this.state.value || ''}
        <Form onSubmit={this.onSubmit}>
          <Input onChange={this.handlerInput} />
        </Form>
        
      
        <ListGroup>
          <TransitionGroup>
            {items.map(({ name, id, desc }) => (
               <CSSTransition key={id} timeout={500} classNames="fade">
               <ListGroupItem>
                   <Button 
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}
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
  }
}

PizzaList.propTypes = {
  getPizza: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
})
export default connect(mapStateToProps,
   { getPizza, deleteItem, addItem })(PizzaList);

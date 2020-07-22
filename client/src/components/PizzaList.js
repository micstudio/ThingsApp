import React, { Component, useState, useEffect  } from 'react';
import { Container, ListGroup, ListGroupItem, Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import {removeItem} from '../actions/index';
import BookInput from './BookInput';

const PizzaList = (props) => {


  const { removeItem } = props;

 
  
  return (
    <Container>
      <BookInput />
        
        <ListGroup>
          <TransitionGroup >
            {props.items2.map(({ name, id, desc }) => (
               <CSSTransition key={id} timeout={500} classNames="fade">
               <ListGroupItem>
                   <Button 
                    className="remove-btn"
                    color="danger"
                    size="sm"
                     onClick={() => removeItem(id)}
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
};


const mapDispatchToProps = dispatch => ({
  removeItem: (a)   => dispatch(removeItem(a))
})

const mapStateToProps = state => {
  const {items3} = state;
  return { items2 : items3};
};
export default connect(mapStateToProps,mapDispatchToProps)(PizzaList);


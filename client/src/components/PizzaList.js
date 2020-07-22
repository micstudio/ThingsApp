import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import {removeItem} from '../actions/index';

const PizzaList = (props) => {

  const { removeItem } = props;
  
  return (
    <Container>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('enter item');
            if (name) {
              this.setState((state) => ({
                items: [...state.items, { id: uuid(), name }],
              }));
            }
          }}
        >
          ADD PIZZA DETAL
        </Button>
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


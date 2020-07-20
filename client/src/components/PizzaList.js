import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

class PizzaList extends Component {
  state = {
    items: [
      { id: uuid(), name: 'EGGS' },
      { id: uuid(), name: 'SALAMI' },
      { id: uuid(), name: 'KASE' },
      { id: uuid(), name: 'MULE' },
    ],
  };
  render() {
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
          <TransitionGroup className="shopping-list">
            {this.state.items.map(({ name, id, desc }) => (
               <CSSTransition key={id} timeout={500} classNames="fade">
               <ListGroupItem>
                   <Button 
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                        this.setState(state => ({
                            items: state.items.filter(item => item.id !== id)
                        }))
                    }}
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

export default PizzaList;

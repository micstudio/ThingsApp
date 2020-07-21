import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { getPizza } from '../actions/itemAction';
import PropTypes from 'prop-types';

class PizzaList extends Component {

  componentDidMount(){
    this.props.getPizza();
  }
  
  render() {
    
    const { items } = this.props.item;
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
          <TransitionGroup>
            {items.map(({ name, id, desc }) => (
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

PizzaList.propTypes = {
  getPizza: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
})
export default connect(mapStateToProps, { getPizza })(PizzaList);

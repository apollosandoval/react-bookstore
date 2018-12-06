import React from 'react';
import CartItem from './CartItem';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ShoppingCart = ({items, onDeleteFromCart}) => {
    let cartItems = items.map( item => <CartItem key={item.id} cartItem={item} onDeleteFromCart={onDeleteFromCart} />)
    let total = items.reduce((acc, item) => { return acc+item.price }, 0);
    
    return (
        <ListGroup>
            <ListGroupItem>Total: ${total}</ListGroupItem>
            {cartItems}
        </ListGroup>
    )
}

export default ShoppingCart;
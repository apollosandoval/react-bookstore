import React from 'react';
import CartItem from './CartItem';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ShoppingCart = ({items, onAddToCart}) => {
    let cartItems = items.map( item => <CartItem key={item.id} cartItem={item} onAddItem={onAddToCart} />)
    let total = items.reduce((acc, item) => { return acc+item.price }, 0);
    
    return (
        <ListGroup>
            <ListGroupItem>Total: ${total}</ListGroupItem>
            {cartItems}
        </ListGroup>
    )
}

export default ShoppingCart;
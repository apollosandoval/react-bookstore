import React from 'react';
import CartItem from './CartItem';
import { ListGroup } from 'reactstrap';

const ShoppingCart = ({items, onAddToCart}) => {
    let cartItems = items.map( item => <CartItem key={item.id} cartItem={item} onAddItem={onAddToCart} />)

    return (
        <ListGroup>
            {cartItems}
        </ListGroup>
    )
}

export default ShoppingCart;
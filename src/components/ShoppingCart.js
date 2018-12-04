import React from 'react';
import CartItem from './CartItem';
import { ListGroup } from 'reactstrap';

const ShoppingCart = ({items}) => {
    let cartItems = items.map( item => <CartItem key={item.id} cartItem={item} />)

    return (
        <ListGroup>
            {cartItems}
        </ListGroup>
    )
}

export default ShoppingCart;
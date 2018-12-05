import React from 'react';
import { ListGroupItem } from 'reactstrap';

const CartItem = ({cartItem}) => {
    
    return (
        <ListGroupItem>{cartItem.title}</ListGroupItem>
    )
}

export default CartItem;
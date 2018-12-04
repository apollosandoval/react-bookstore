import React from 'react';
import { ListGroupItem } from 'reactstrap';

const CartItem = ({cartItem}) => {
    return (
        <ListGroupItem>{cartItem.properties.title}</ListGroupItem>
    )
}

export default CartItem;
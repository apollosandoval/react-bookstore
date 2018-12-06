import React from 'react';
import { ListGroupItem, Row, Col, Button } from 'reactstrap';

const CartItem = ({cartItem, onDeleteFromCart}) => {

    let handleClick = () => {
        onDeleteFromCart(cartItem)
    }
    
    return (
        <ListGroupItem>
            <Row>
                <Col xs="9">
                    {cartItem.title}
                </Col>
                <Col>
                    <Button onClick={handleClick}>Remove</Button>
                </Col>
            </Row>
        </ListGroupItem>
    )
}

export default CartItem;
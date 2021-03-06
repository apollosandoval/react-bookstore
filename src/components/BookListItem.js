import React from 'react';
import { ListGroupItem, Row, Col, Button } from 'reactstrap';

class BookListItem extends React.Component {

    handleClick = () => {
        this.props.onAddToCart(this.props.book)
    }

    render() {
        let {book} = this.props

        return (
            <ListGroupItem>
                <Row>
                    <Col xs="9">
                        <Row>{book.title}</Row>
                        <Row>By: {book.author}</Row>
                    </Col>
                    <Col>
                        <Button onClick={ this.handleClick }>Add to cart</Button>
                    </Col>
                </Row>
            </ListGroupItem>
        )
    }
}

export default BookListItem;
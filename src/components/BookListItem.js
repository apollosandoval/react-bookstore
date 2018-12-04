import React from 'react';
import { ListGroupItem } from 'reactstrap';

const BookListItem = ({book}) => {
    console.log(book);
    return (
        <ListGroupItem>{book.properties.title}</ListGroupItem>
    )
}

export default BookListItem;
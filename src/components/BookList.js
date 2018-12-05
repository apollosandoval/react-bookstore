import React from 'react';
import {ListGroup} from 'reactstrap';
import BookListItem from './BookListItem';

const BookList = ({books, onAddToCart}) => {
    let bookList = books.map(book => <BookListItem key={book.id} book={book} onAddToCart={onAddToCart} />)
    return (
        <ListGroup>
            {bookList}
        </ListGroup>
    )
}

export default BookList;
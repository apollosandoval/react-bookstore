import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TopNav from './components/TopNav';
import BookList from './components/BookList';
import ShoppingCart from './components/ShoppingCart';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {id: 1, properties: {title: 'Moby-Dick'}},
        {id: 2, properties: {title: 'Frankenstein'}},
        {id: 3, properties: {title: 'Wuthering Heights'}}
      ],
      cart: [
        {id: 1, properties: {title: 'Moby-Dick'}}
      ]
    }
  }

  render() {
    
    return (
      <Fragment>
        <TopNav />
        <Container>
          <Row>
            <Col xs="8">
            <Row>
              <Col xs="12">
                <h1>List of Books</h1>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                {/* Insert BookList Component */}
                <BookList books={this.state.products} />
              </Col>
            </Row>
              
            </Col>
            <Col>
              <Row>
                <Col xs="12">
                  <h1>Shopping Cart</h1>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  {/* Insert Shopping Cart Component */}
                  <ShoppingCart items={this.state.cart} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;

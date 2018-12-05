import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TopNav from './components/TopNav';
import BookList from './components/BookList';
import ShoppingCart from './components/ShoppingCart';
import Filter from './components/Filter';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    products: [],
    visible: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books');
    const json = await response.json();
    this.setState({products: json, visible: json});
  }

  booksInCart = () => this.state.products.filter(book => book.inCart)

  addToCart = (item) => {
    fetch(`http://localhost:8082/api/books/cart/add/${item.id}`, {
      method: "PATCH"
    }).then( res => {
        this.setState(state => ({
          products: state.products.reduce((acc, cv) => {
            var thisItem = cv
            if (cv.id === item.id) {
              thisItem.inCart = true
            }
            return [...acc, thisItem]
          }, [])
        }))
    })
  }

  filterBooks = (searchTerm, filterToApply) => {
    // console.log(
    //   this.state.products.filter(book => book[filterToApply].includes(searchTerm))
    // )
    if (searchTerm) {
      this.setState(state => ({
        visible: state.products.filter(product => product[filterToApply].includes(searchTerm))
      }))
    } else {
      this.setState(state => ({
        visible: state.products
      }))
    }
  }

  render() {
    
    return (
      <Fragment>
        <TopNav />
        <Container>
          <Row>
            <Col xs="8">
            <Row className="align-items-center">
              <Col xs="6">
                <h1>List of Books</h1>
              </Col>
              <Col>
                {/* Filter Input Component */}
                <Filter onFilter={ this.filterBooks } />
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                {/* Insert BookList Component */}
                <BookList books={this.state.visible} onAddToCart={this.addToCart}/>
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
                  <ShoppingCart items={this.booksInCart()} />
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

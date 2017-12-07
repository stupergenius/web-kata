import React, { Component } from 'react'
import 'whatwg-fetch'
import { Route } from 'react-router-dom'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { products: [] }
    this.removeProduct = this.removeProduct.bind(this);
    this.fetchProducts()
  }

  fetchProducts()
  {
    const url = '/api/products/get'
    const options = {
      method: "GET"
    }

    fetch(url, options)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      this.setState({ products: json })
    }.bind(this))
  }
  
  removeProduct(name)
  {
    const url = '/api/products/delete/' + name
    const options = {
      method: "DELETE"
    }

    fetch(url, options)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      this.setState({ products: json })
    }.bind(this))
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 5 - Interaction with backend server through REST API calls</h2>
      </div>
      <div className='products-add-product'>add product here</div>
      <div className='products-container'>
        <ProductMenu products={this.state.products} removeHandler={this.removeProduct} />
        <Route exact path='/products/:productName' component={
          props => <ProductContainer {...props} products={this.state.products} />
        } />
      </div>
    </div>
  }
}

export default App

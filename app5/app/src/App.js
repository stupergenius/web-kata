import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { products: [], error: false }
    
    fetch("http://159.89.147.145:5000/api/products/get").then(response => {
      response.json().then(products => {
        this.setState({products: products})
      }, error => {
        this.setState({error: true});
      })
    }, error => {
      this.setState({error: true});
    });
    
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  handleDelete(product) {
    const url = "http://159.89.147.145:5000/api/products/delete/"+encodeURIComponent(product.name)
    fetch(url, {method: "DELETE"}).then(response => {
      response.json().then(products => {
        this.setState({products: products})
      }, error => {
        this.setState({error: true});
      })
    }, error => {
      this.setState({error: true});
    });
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 5 - Interaction with backend server through REST API calls</h2>
      </div>
      <div className='products-add-product'>add product here</div>
      <div className='products-container'>
        <ProductMenu handleDeleteProduct={this.handleDelete} products={this.state.products} />
        <Route exact path='/products/:productName' component={
          props => <ProductContainer {...props} products={this.state.products} />
        } />
      </div>
    </div>
  }
}

export default App

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
    
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  handleAdd(event) {
    event.preventDefault()

    const newProduct = {
      name: event.target.name.value,
      description: event.target.description.value
    }
    
    const options = {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch("http://159.89.147.145:5000/api/products/add", options).then(response => {
      response.json().then(products => {
        this.setState({products: products})
      }, error => {
        this.setState({error: true});
      })
    }, error => {
      this.setState({error: true});
    });
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
      <div className='add-product'>
        <form onSubmit={this.handleAdd}>
          <label>product name:
            <input type='text' name='name' />
          </label>
          <label>description:
            <input type='text' name='description'/>
          </label>
          <input type='submit' value='add product' />
        </form>
      </div>
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

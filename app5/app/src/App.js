import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import data from './data.js'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { products: data.products }
      fetch('/api/products/get').then(response => {
          return response.json()
      }).then(json => {
          this.setState({products: json})
      });
  }

    remove(product) {
        fetch('/api/products/delete/' + product.name, {method: "DELETE"}).then(response => {
            return response.json()
        }).then(json => {
            this.setState({products: json})
        });
    }

    handleAddProduct(event){
        event.preventDefault()

        let data = {
            name: event.target.name.value,
            description: event.target.description.value
        };

        fetch('api/products/add', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            this.setState({products: json})
        });
    }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 5 - Interaction with backend server through REST API calls</h2>
      </div>
      <div className='products-add-product'>
          <form onSubmit={this.handleAddProduct.bind(this)}>
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
        <ProductMenu products={this.state.products} remove={this.remove.bind(this)}/>
        <Route exact path='/products/:productName' component={
          props => <ProductContainer {...props} products={this.state.products} />
        } />
      </div>
    </div>
  }
}

export default App

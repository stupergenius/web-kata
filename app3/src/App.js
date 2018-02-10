import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      products: data.products,
      nameFilter: ""
    }

    this.handleAddProduct = this.handleAddProduct.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this)
    this.filteredProducts = this.filteredProducts.bind(this)
  }

  handleAddProduct(event) {
    event.preventDefault()
    const products = [...this.state.products]

    products.push({
      name: event.target.name.value,
      description: event.target.description.value
    })

    this.setState({products: products})
  }

  removeProduct(product) {
    const newProducts = _.filter(this.state.products, p => p.name !== product.name)
    this.setState({products: newProducts})
  }
  
  handleFilterChange(event) {
    const target = event.target
    this.setState({
      [target.name]: target.value
    })
  }
  
  handleFilterSubmit(event) {
    event.preventDefault();
  }
  
  filteredProducts() {
    let filter = this.state.nameFilter.trim().toLowerCase()
    if (filter.length === 0) {
      return this.state.products
    } else {
      return _.filter(this.state.products, p => {
        return p.name.toLowerCase().startsWith(filter)
      })
    }
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 3- Filter, show and hide objects</h2>
      </div>
      <div className='filter-products'>
        <form onSubmit={this.handleFilterSubmit}>
          <label>
            Search:
            <input
              type="text"
              name="nameFilter"
              placeholder="product name"
              value={this.state.nameFilter}
              onChange={this.handleFilterChange} />
          </label>
        </form>
      </div>
      <div className='add-product'>
        <form onSubmit={this.handleAddProduct}>
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
        <Products
          products={this.filteredProducts()}
          removeProduct={this.removeProduct} />
      </div>
    </div>
  }
}

export default App

import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      products: data.products,
      name: "",
      description: ""
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target
    this.setState({
      [target.name]: target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name.length === 0 || this.state.description.length === 0) {
      return;
    }
    
    this.setState(function(prevState, props) {
      return {
        products: [
          {
            name: this.state.name,
            description: this.state.description,
            new: true
          },
          ...prevState.products
        ],
        name: "",
        description: ""
      };
    });
  }
  
  handleRemove(productIndex) {
    this.setState(function(prevState, props) {
      return {
        products: prevState.products.filter((product, index) => index !== productIndex)
      };
    });
  }
  
  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 2- Add and remove objects</h2>
      </div>
      <div className='add-product'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className='products-container'>
        <Products products={this.state.products} onRemove={this.handleRemove} />
      </div>
    </div>
  }
}

export default App

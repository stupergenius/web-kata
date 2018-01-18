import React, { Component } from 'react'
import data from './data.js'
import './App.css'
import Products from './Products'

class App extends Component {
  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Welcome Introduction to <code>web-kata numero uno</code></h2>
      </div>
      <Products products={data.products} />
    </div>
  }
}

export default App;

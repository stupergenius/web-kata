import React, { Component } from 'react'
import _ from 'underscore'
import data from './data.js'
import './ProductContainer.css'
import Product from './Product.js'

class ProductContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: data.products
    }
  }

  render() {
    const name = this.props.match.params.name
    const product = _.find(this.state.products, (p) => { return p.name === name })
    return <div className='product-container'>
        {product && <Product product={product} />}
    </div>
  }
}

export default ProductContainer
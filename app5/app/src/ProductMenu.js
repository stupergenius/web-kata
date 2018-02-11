import React, { Component } from 'react'
import './ProductMenu.css'
import { Link } from 'react-router-dom'

class ProductItem extends Component {
  render() {
    const name = this.props.product.name
    return <div className='product-item'>
      <div className='name'><Link to={'/products/' + name}>{name}</Link></div>
      <div className='actions'>
        <a onClick={() => this.props.handleDeleteProduct(this.props.product)}>x</a>
      </div>
    </div>
  }
}

class ProductMenu extends Component {
  render() {
    return <div className='product-menu'>
      {this.props.products.map(
        (p, i) => <ProductItem
          handleDeleteProduct={this.props.handleDeleteProduct}
          product={p}
          key={'product-' + i} />
      )}
    </div>
  }
}

export default ProductMenu
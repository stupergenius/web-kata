import React, { Component } from 'react'
import './ProductMenu.css'
import { Link } from 'react-router-dom'

class ProductItem extends Component {
  render() {
    const name = this.props.product.name
    return <div className='product-item'>
      <input id="remove" type="button" value="X" onClick={() => this.props.removeHandler(name)} />
      <div className='name'><Link to={'/products/' + name}>{name}</Link></div>
    </div>
  }
}

class ProductMenu extends Component {
  render() {
    return <div className='product-menu'>
      {this.props.products.map(
        (p, i) => <ProductItem product={p} key={'product-' + i} removeHandler={this.props.removeHandler} />
      )}
    </div>
  }
}

export default ProductMenu
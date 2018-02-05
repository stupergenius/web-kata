import React, { Component } from 'react'
import './Products.css'

class Product extends Component{
    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name'>{this.props.product.name}</div>
                <div className='desc'>{this.props.product.description}</div>
            </div>
            <div className='actions'>
                <div className='remove' title='Remove Product' onClick={(e) => this.props.onRemove(this.props.index)}>x</div>
            </div>
        </div>
    }
}

class Products extends Component{
    render(){
        return <div className='products'>
            {this.props.products.map(
                (p, i) =>
                <Product product={p} onRemove={this.props.onRemove} key={'product-' + i } index={i} />
            )}
        </div>
    }
}

export default Products
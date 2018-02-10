import React, { Component } from 'react'
import './Products.css'

class Product extends Component {
    constructor(props){
      super(props)
      this.state = {showDescription: false}
      
      this.handleToggle = this.handleToggle.bind(this)
    }
    
    handleToggle() {
      this.setState({showDescription: !this.state.showDescription})
    }
    
    render() {
        return <div className='product'>
            <div className='details'>
                <div className='name'>{this.props.product.name}</div>
                {this.state.showDescription &&
                  <div className='desc'>{this.props.product.description}</div>}
            </div>
            <div className='actions'>
                <div className='remove' title='fix me' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
                <div className='toggleDescription'
                  title='fix me'
                  onClick={this.handleToggle}>
                  {this.state.showDescription ? '-' : '+'}
                </div>
            </div>
        </div>
    }
}

class Products extends Component {
    render(){
        return <div className='products'>
            {this.props.products.map(
                (p, i) =>
                <Product
                    product={p}
                    key={'product-' + i }
                    removeProduct={this.props.removeProduct}
                />
            )}
        </div>
    }
}

export default Products
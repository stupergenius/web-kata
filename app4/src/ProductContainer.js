import React, { Component } from 'react'
import _ from 'underscore'
import data from './data.js'
import './ProductContainer.css'
import Product from './Product.js'

const lookupProduct = (name) => _.find(data.products, (p => p.name == name))

const ProductContainer = ({product}) => <div className='product-container'>
      <Product product={lookupProduct(product)}/>
    </div>

export default ProductContainer
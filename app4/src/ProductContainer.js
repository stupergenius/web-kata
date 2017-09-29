import React, { Component } from 'react'
import _ from 'underscore'
import data from './data.js'
import './ProductContainer.css'
import Product from './Product.js'


const ProductContainer = (props) => <div className='product-container'>
      {props.product}
    </div>

export default ProductContainer
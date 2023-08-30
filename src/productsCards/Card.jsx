import React from 'react'
import '../Assets/css/products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

  const Card = ( { 
    name, 
    price, 
    description, 
    imgs, 
    stock,
    newCollection,
  } ) => {
    console.log(price);

  let imageProduct = stock < 45 ? `/images/${imgs.imgSoldOut}`
  : `/images/${imgs.imgProduct} `
  
  let priceProduct = price < 200 ? true : false

  return (
    <div class="product-container">
        <div className="product-card">
          {/*newCollection && (
            <span className='new'>
            {<img className='star' src={`/images/${imgs.imgStar}`} alt='product'/>}
            New  
            </span>
          )*/}
          <div class="product-image">
            {<img className='img-product' src={`/images/${imgs.imgProduct}`} alt='prod'/>}
            {/* <img src={productImage} alt="Product Name"/> */}
        </div>
        
        <div class="product-info">
        <p class="product-description">{description}</p>
            <h2 class="product-name">{name}</h2>
            <p class="product-price">{priceProduct && <spam>30% off</spam>}
              $ {price} </p>

        <div class="cart">
          <button class="add-to-cart-btn">
            <FontAwesomeIcon icon={faCartShopping} class="cart-i"/> 
            <p>Add to Cart</p>
          </button>
        </div>             
        </div>
      </div>
    </div>
  )
}


export default Card
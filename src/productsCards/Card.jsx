import React from 'react'
import '../Assets/css/card.css'


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
    <div>
        <section className='card-conteiner'>
          {newCollection && (
            <span className='new'>
            {<img className='star' src={`/images/${imgs.imgStar}`} alt='product'/>}
            New  
            </span>
          )}
          {<img className='img-product' src={`/images/${imgs.imgProduct}`} alt='prod'/>}
        </section>
        <div>
            <h2>{name}</h2>
            <h4>
              {priceProduct && <spam>30%off</spam>}
              $ {price} 
            </h4>
            <p>{description}</p>
        </div>
    </div>
  )
}


export default Card
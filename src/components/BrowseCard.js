import React from 'react';
import '../css/browse.css';

const BrowseCard = ({title, info, price, imageSource}) => {

  const addToCart = () => {
    // Code to add item to cart will go here
    alert(`${title} was clicked`);
  }

  return (
    <div class="carCard">
      <img src={imageSource} alt="image of car" class="carImage"/>
      <h2>{title}</h2>
      <h2>{info}</h2>
      <h2>{price}</h2>
      <button class="addCartBtn" onClick={addToCart}>Add to Cart</button>
    </div>

  )
}

export default BrowseCard

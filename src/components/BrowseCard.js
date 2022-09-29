import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/browse.css';

const BrowseCard = ({title, info, price, imageSource}) => {
  const navigate = useNavigate();

  const [addModal, setAddModal] = useState(false)

  const toggleAddToCartModal = () => {
    setAddModal(!addModal)
  }

  const myCartPage = async () => {
    await navigate("/products")
}

  return (
    <div class="carCard">
      <img src={imageSource} alt="autotrader car" class="carImage"/>
      <h2 className='carTitle'>{title}</h2>
      <h2>{info}</h2>
      <h2>{price}</h2>
      <button class="addCartBtn"  onClick={toggleAddToCartModal}>Add to Cart</button>
      {addModal && (
                          <div className="modal">
                          <div className="overlay" onClick={toggleAddToCartModal}></div>
                          <div className="modal-content">
                          <button className="closeBtn" onClick={toggleAddToCartModal}>X</button>
                            <div className="modal-container">
                              <div className="modal-car-info" >
                                <img className="modalCar" src={imageSource} alt="autotrader car"/>
                                <h2>{title}</h2>
                                <h2>{price}</h2>
                              </div>
                              <div>
                                <h1 className="modal-title">Successfully added to cart</h1>
                              </div>
                            </div>
                            <button className="addCartBtn" onClick={() => myCartPage()}>View Cart</button>
                          </div>
                        </div>
                )}
    </div>

  )
}

export default BrowseCard

import React, {useContext}  from "react";
import {useNavigate, } from "react-router-dom";
import {PRODUCTS} from "../../products";
import {ShopContext} from "../../context/shop-context";
import {CartItem} from "../cart/cart-item";
import "./checkout.css";

export const Checkout = () => {

  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate()


  return(
    <div className="checkout-container">
      <div>
      <h1>Checkout Page</h1>
      </div>
      <div>
        
      </div>
      
    </div>
  )
}
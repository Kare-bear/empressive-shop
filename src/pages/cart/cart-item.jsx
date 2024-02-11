import React, {useContext} from "react";
import {ShopContext} from "../../context/shop-context";


export const CartItem = (props) => {

  const {id, brand, line, item_name, sale_price, image_url_1} = props.data;
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

  return(
    <div className="cartItem">
      <img src={image_url_1}/>
      <div className="description">
        <p>
          <b>{brand} {line} {item_name}</b>
        </p>
        <p>${sale_price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  )
}
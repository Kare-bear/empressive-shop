import React, { useContext } from "react";
import {ShopContext} from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { useParams } from "react-router-dom";




export const ProductPage = () => {

  let {id} = useParams;

  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return(
    <div>
      <div className="cardBox">
          <img src={PRODUCTS.image_url_1} className="cardImages" alt="image1"/>
        </div>
        <div className="cardText">
          <h2>{PRODUCTS.brand} {PRODUCTS.line} {PRODUCTS.item_name}</h2>
          <h1>${PRODUCTS.sale_price}</h1>
          </div>
          <div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
              Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
            </button>
          </div>
    </div>
  )
}
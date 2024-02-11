import React, { useContext } from "react";
import {Link, useParams} from "react-router-dom";
import {ShopContext} from "../../context/shop-context";
import "./shop.css"


export const Product = (props) => {
  const {id, brand, line, item_name, item_type, item_sku, notes, sale_price, image_url_1, image_url_2} = props.data;

  

  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return(
  <div>
    <div className="cardBox">
          <Link to ="/product-page"><img src={image_url_1} className="cardImages" alt="image1"/></Link>
        </div>
        <div className="cardText">
          <h2>{brand} {line} {item_name}</h2>
          <h1>${sale_price}</h1>
          </div>
          <div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
              Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
            </button>
          </div>
  </div>
  )
}; 
import React from "react";
import { PRODUCTS } from "../../products";
import {Product} from "./product";
import {Slide} from "react-slideshow-image";

export const Shop = () => {
  return (
    <div className="shop">

    <div>
      <h1>EMPRESSIVE FAVORITES</h1>
      {/* <div className="slide-container">
        <Slide images={PRODUCTS.map((product) => product.image_url_1)}>
          {PRODUCTS.map((product, id) => (
          <div key={id} className="each-slide">
            <img src={product.image_url_1} />
          </div>
          ))}
        </Slide>
    </div> */}
    </div>
    <div className="displayCard">
      {PRODUCTS.map((product) => (
      <Product data={product}/>
      ))}
    </div>
  </div>
  )
};
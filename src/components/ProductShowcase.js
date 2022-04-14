import React from "react";
import image from "../images/image-product-1.jpg";

function ProductShowcase(props) {
  return (
    <div className="productShowcase">
      <img src={image} className="showcaseImage" alt="productImage"></img>
      <h3 className="showcaseTitle">Fall Limited Edition Sneakers</h3>
      <div className="priceContainer">
          <h4 className="price ">$125.00</h4>
          <div>
          <div className="exPrice">$250.00</div>
          <span className="discountBox">50%</span>
          </div>
      </div>
    </div>
  );
}
export default ProductShowcase;

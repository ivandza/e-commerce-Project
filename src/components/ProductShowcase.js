import React from "react";
import {Link} from "react-router-dom"
import image from "../images/image-product-1.jpg";

function ProductShowcase(props) {

  console.log(props.productInfo)
  return (
    <Link to={`/collections/${props.productInfo.id}`}>
    <div className="productShowcase">
      <img src={image} className="showcaseImage" alt="productImage"></img>
      <h3 className="showcaseTitle">{props.productInfo.productName}</h3>
      <div className="priceContainer">
          <h4 className="price ">${props.productInfo.price*props.productInfo.discount/100}.00</h4>
          <div>
          <div className="exPrice">{props.productInfo.price}.00</div>
          <span className="discountBox">{props.productInfo.discount}%</span>
          </div>
      </div>
    </div>
    </Link>
  );
}
export default ProductShowcase;

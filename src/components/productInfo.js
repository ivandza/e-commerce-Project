import React from "react";
import plus from "./../images/icon-plus.svg"
import minus from "./../images/icon-minus.svg"
import cartIcon from "./../images/icon-cart.svg"
export default function ProductInfo(props) {
  const [value,setValue]=React.useState(0)
  function changeValue(val){
    if(value!==0 || val!==-1)
    setValue(prevValue=>prevValue+val)
  }

  return (
    <div className="productInfo">
      <h5>SNEAKER COMPANY</h5>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable ruber outer sole, they'll withstand everything the
        weather can offer
      </p>
      <div className="priceContainer">
        <h3 className="price">$125.00</h3>
        <span className="discountBox">50%</span>
        <div className="exPrice">$250.00</div>
      </div>
      <div className="exPrice disappear">$250.00</div>
      <div className="buyMenu">
        <div className="plusMinusArea">
          <img src={minus} className="plusMinusButton" onClick={()=>changeValue(-1)} alt="-"/>
          <b className="numberBox">{value}</b>
          <img src={plus} className="plusMinusButton" onClick={()=>changeValue(1)} alt="+"/>
        </div>
        <button className="addToCartButton" onClick={()=>props.func(value)}><img src={cartIcon} alt="cartIcon" className="filter-white" />Add to cart</button>
      </div>
    </div>
  );
}

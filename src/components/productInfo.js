import React from "react";
import plus from "./../images/icon-plus.svg"
import minus from "./../images/icon-minus.svg"
import cartIcon from "./../images/icon-cart.svg"


export default function ProductInfo(props) {
  const [valueComp,setValueComp]=React.useState(0)
  function changeValueComp(val){
    if(valueComp!==0 || val!==-1)
    setValueComp(prevValue=>prevValue+val)
  }

  return (
    <div className="productInfo">
      <h5>{props.productData.company}</h5>
      <h2>{props.productData.productName}</h2>
      <p>
      {props.productData.description}
      </p>
      <div className="priceContainer">
        <h3 className="price">${props.productData.price*props.productData.discount/100}.00</h3>
        <span className="discountBox">{props.productData.discount}%</span>
        <div className="exPrice">${props.productData.price}.00</div>
      </div>
      {/* <div className="exPrice disappear">{props.productData.company}</div>   */}  
            <div className="buyMenu">

        <div className="plusMinusArea">
          <img src={minus} className="plusMinusButton" onClick={()=>changeValueComp(-1)} alt="-"/>
          <b className="numberBox">{valueComp}</b>
          <img src={plus} className="plusMinusButton" onClick={()=>changeValueComp(1)} alt="+"/>
        </div>

        <button className="addToCartButton" onClick={()=>changeValueComp(valueComp)}><img src={cartIcon} alt="cartIcon" className="filter-white" />Add to cart</button>


      </div>
    </div>
  );
}

import React from "react";
import productImage from ".././images/image-product-1.jpg";
import productImage2 from ".././images/image-product-2.jpg";
import productImage3 from ".././images/image-product-3.jpg";
import productImage4 from ".././images/image-product-4.jpg";
import closeImage from ".././images/icon-close.svg";
import iconNext from ".././images/icon-next.svg";
import iconPrevious from ".././images/icon-previous.svg";
import productThumbnail1 from "./../images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "./../images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "./../images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "./../images/image-product-4-thumbnail.jpg";

export default function Modal(props) {
  const [index,setIndex]=React.useState(props.value)
  const imageArray=[productImage,productImage2,productImage3,productImage4]
  function changeIndex(value){
    let temp=0
    if((index+value)!==-1 && index+value!==4)
    {
      temp=value+index
      document.getElementById(`thumbnail${index}`).style.cssText='border:none;opacity:0.8;'
      document.getElementById(`thumbnail${temp}`).style.cssText='border:5px solid orange;opacity:1;'
      setIndex(prevIndex=>prevIndex+value)
      }

  }
  function changeImage (value){
    document.getElementById(`thumbnail${index}`).style.cssText='border:none;opacity:0.8;'
    document.getElementById(`thumbnail${value}`).style.cssText='border:5px solid orange;opacity:1;'
    setIndex(value)

  }
  return (
    <div className="modal" style={props.style}>
      <div className="modalFlex">
        <img
          src={closeImage}
          className="exitModal"
          onClick={props.closeModal}
          alt="exit"
        />
        <img src={iconPrevious} alt="previous" onClick={()=>changeIndex(-1)} className="scrollButtons" />

        <img src={imageArray[index]} className="modalImage" alt="modalImg" />

        <img src={iconNext} alt="next" onClick={()=>changeIndex(1)} className="scrollButtons" />
      </div>
      <div className="centered">
      <div className="thumbnailContainer">
          <img src={productThumbnail1} className="thumbnails" id="thumbnail0" onClick={()=>changeImage(0)}></img>
          <img src={productThumbnail2} className="thumbnails" id="thumbnail1" onClick={()=>changeImage(1)}></img>
          <img src={productThumbnail3} className="thumbnails" id="thumbnail2" onClick={()=>changeImage(2)}></img>
          <img src={productThumbnail4} className="thumbnails" id="thumbnail3" onClick={()=>changeImage(3)}></img>
        </div>
        </div>
    </div>
  );
}

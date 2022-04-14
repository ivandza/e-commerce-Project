import React from "react";
import productImage1 from "./../images/image-product-1.jpg";
import productThumbnail1 from "./../images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "./../images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "./../images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "./../images/image-product-4-thumbnail.jpg";

export default function ProductImageCanvas(props) {

  return (
    <div >
      <div >
        <img src={productImage1} className="productImage" onClick={()=>props.openModal(0)} alt="shoeImg"></img>
        <div className="thumbnailContainer">
          <img src={productThumbnail1} className="thumbnails" onClick={()=>props.openModal(0)} alt="shoeThumb"></img>
          <img src={productThumbnail2} className="thumbnails" onClick={()=>props.openModal(1)} alt="shoeThumb"></img>
          <img src={productThumbnail3} className="thumbnails" onClick={()=>props.openModal(2)} alt="shoeThumb"></img>
          <img src={productThumbnail4} className="thumbnails" onClick={()=>props.openModal(3)} alt="shoeThumb"></img>
        </div>
      </div>

    </div>
  );
}

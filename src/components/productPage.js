import React from "react"
import ProductInfo from './productInfo.js';
import ProductImageCanvas from './productImageCanvas';
import {useParams} from "react-router-dom"
import Modal from './modal';
import sneakersData from "../sneakers.json"
function ProductPage(props){
  const {shoeId}=useParams()
  const productData=sneakersData.products.find(product=> product.id==shoeId)
    const [modal, setModal] = React.useState(0);
    const [style, setStyle] = React.useState({
      display: "none",
    });
    function openModal(val) {
  
      setStyle({
        display: "block",
      });
      setModal(val)
    }
  
    function closeModal() {
      setStyle({
        display: "none",
      });
    }
    React.useEffect(() => {
      document.addEventListener("keydown", closeModal, false);
      return () => {
        document.removeEventListener("keydown", closeModal, false);
      };
    }, []);
    return(
        <center>
        <div className="productArea">
          <ProductImageCanvas productData={productData} openModal={openModal} />
          <ProductInfo productData={productData}   />  
          {/* func={changeValue} number={number} */}
          <Modal
            productData={productData}
            style={style}
            openModal={openModal}
            closeModal={closeModal}
            value={modal}
          />
        </div>
      </center>
    )
}
export default ProductPage
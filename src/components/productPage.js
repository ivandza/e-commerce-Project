import React from "react"
import ProductInfo from './productInfo.js';
import ProductImageCanvas from './productImageCanvas';
import Modal from './modal';
function ProductPage(){
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
          <ProductImageCanvas openModal={openModal} />
          <ProductInfo   />  
          {/* func={changeValue} number={number} */}
          <Modal
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
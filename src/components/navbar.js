import React from "react";
import {Link} from "react-router-dom"
import cartIcon from "./../images/icon-cart.svg";
import avatar from "./../images/image-avatar.png";
import productThumbnail1 from "./../images/image-product-1-thumbnail.jpg";
import binIcon from "./../images/icon-delete.svg";
import menuIcon from "./../images/icon-menu.svg";
import exitIcon from "./../images/icon-close.svg";


export default function Navbar(props) {
  const value=0
  const [showMenu,setShowMenu]=React.useState({
    display: "none",
  });
  function showMobileMenu(){
    setShowMenu({
      display:"flex",
    })
  }
  function closeMobileMenu(){
    setShowMenu({
      display:"none",
    })
  }
  return (
    <div className="navbar">
      <div className="navbarLeftDiv">
        <div>
        <img src={menuIcon} alt="menuIcon" className="menuIcon" onClick={showMobileMenu} /> 
          <div className="mobileNavbar" style={showMenu}>
          <img src={exitIcon} alt="exitIcon" className="exitIcon" onClick={closeMobileMenu} ></img>
          <Link to="/main">Collections</Link>
          <Link to="/main">Men</Link>
          <Link to="/main">Women</Link>
          <Link to="/main">About</Link>
          <Link to="/main">Contact</Link>
        </div>
        <div className="blackScreen" style={showMenu}>a</div>

        </div>
        <Link to="/" className="siteTitle">sneakers</Link>
        <div className="navbarLeftDiv disappear">
          <Link to="/collections">Collections</Link>
          <Link to="/main">Men</Link>
          <Link to="/main">Women</Link>
          <Link to="/main">About</Link>
          <Link to="/main">Contact</Link>
        </div>

      </div>

                     <div className="navbarRightDiv">
                     <div className="hoverOver">
                       <div className="divForPositon">
                         <img src={cartIcon} alt="cartIcon" className="padding" />
                         {value !== 0 && (
                           <div className="cartStatePopup">{value}</div>
                         )}
                       </div>
                       <div className="cartContents-dropdown">
                         {" "}
                         <p className="cartTitle">Cart</p>
                         {value === 0 ? (
                           <div className="cartEmpty">Cart is empty</div>
                         ) : (
                           <div>
                             <div className="cartCurrentState">
                               <img
                                 src={productThumbnail1}
                                 className="cartProductThumbnail"
                                 alt="productThumbnail"
                               ></img>
                               <div className="cartProductText">
                                 Fall limited edition sneakers{" "}
                                 <p>
                                   $125.00 x {value} <b>${value * 125}.00</b>
                                 </p>{" "}
                               </div>
                               <img src={binIcon} alt="delete" />
                             </div>
                             <center>
                               <button className="checkoutButton">Checkout</button>
                             </center>
                           </div>
                         )}
             
                       </div>
                     </div>
                     <img src={avatar} className="avatar" alt="profilePicture" />
                   </div>


    </div>
  );
}

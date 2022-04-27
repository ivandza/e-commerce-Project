import {Routes,Route,Link} from "react-router-dom"
import React from 'react';


import ProductShowcase from "./components/ProductShowcase"
import ProductPage from "./components/productPage"
import Navbar from './components/navbar';
import HomePage from "./components/HomePage"
import sneakersData from "./sneakers.json"
import './App.css';

function App() {
  const [number, setNumber] = React.useState(0);
  console.log(sneakersData.products)
  function changeValue(value) {
    setNumber((prevValue) => prevValue + value);
  }
  function clearBin() {
    setNumber(0);
  }
  return (
    <div className="App">
      <Navbar number={number} clearBin={clearBin} />
      <Routes>
            <Route exact path="/" element={<HomePage></HomePage>}/>
            <Route path="/collections" element={sneakersData.products.map(product=> <div className='showcaseContainer'><ProductShowcase productInfo={product}/> </div>) }/>
            <Route path="/collections/:shoeId" element= {<ProductPage /> }/>
        </Routes>
    </div>
  );
}

export default App;

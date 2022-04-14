import Navbar from './components/navbar';
import {Routes,Route} from "react-router-dom"

import ProductShowcase from "./components/ProductShowcase"
import ProductPage from "./components/productPage"
import React from 'react';
import './App.css';

function App() {
  const [number, setNumber] = React.useState(0);
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
            <Route path="/collections" element={<div className='showcaseContainer'><ProductShowcase/> </div>}/>
            <Route exact path="/men" element={<ProductPage/>}/>
        </Routes>
    </div>
  );
}

export default App;

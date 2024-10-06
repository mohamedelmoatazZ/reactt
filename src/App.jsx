import React from 'react';
import './App.css';
import ProductSlideE from './ProductٍSlideE';
// import Production from './Production';
import Priduction from './Priduction';
import Slide2 from './Slide2';
import Momyz from './Momyz';
import OnePic from './OnePic';
import Product2 from './Product2';
import TwoPic from './TwoPic';
import Footer from './Footer';
import NavBar from './NavBar';
function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <br />
      <ProductSlideE />
      <br />
      <Priduction />
      <br />
      <Slide2 />
      <br />
      <Momyz />
      <br />
      <OnePic />
      <br />
      <Product2 />
      <br />
      <TwoPic />
      <br />
      <Footer/>
   </React.Fragment>
  );
}
export default App;
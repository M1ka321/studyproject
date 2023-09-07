import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from "./components/MyButton";
import Profile from "./components/Profile";
import Product, {IProduct} from "./components/Product";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <MyButton/>
      <Profile/>
      <ProductList/>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from "./components/MyButton";
import Profile from "./components/Profile";
import Product, {IProduct} from "./components/Product";
import ProductList from "./components/ProductList";
import Button2 from "./components/Button2";
import Counter from "./components/Counter";
import MyInput from "./components/MyInput";
import MyForm from "./components/MyForm";
import product from "./components/Product";

function App() {

  const [productList, setProductList] = useState<IProduct[]>([{id:1, name: "Banana", count: 5, inCart: true, price:25}])

  const addProduct = (product: IProduct) => {
    setProductList([...productList, product])
  }

  return (
    <div>
      <MyForm addProduct = {addProduct}/>
      <ProductList products={productList}/>
    </div>
  );
}

export default App;

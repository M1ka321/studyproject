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

function App() {


  const [count, setCount] = useState<number>(0)
  // const inc = () => setCount(count + 1)
  // const dec = () => setCount(count - 1)

  return (
    <div>
      {/*<Profile/>*/}
      {/*<ProductList/>*/}
      <MyForm/>
      {/*<Counter count={count} inc={inc} dec={dec}/>*/}
      {/*<Counter count={count} inc={inc} dec={dec}/>*/}
      {/*<Button2 message="Кнопка 2 нажата">Кнопка 2</Button2>*/}
    </div>
  );
}

export default App;

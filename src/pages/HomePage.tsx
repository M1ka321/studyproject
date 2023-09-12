import React, {useState} from 'react';
import {IProduct} from "../components/Product";
import MyForm from "../components/MyForm";
import ProductList from "../components/ProductList";


const HomePage = () => {

  const initialState = [{id:1, name: "Banana", count: 5, inCart: true, price:25}]

  const [productList, setProductList] = useState<IProduct[]>(initialState)

  const addProduct = (product: IProduct) => {
    product.id = Math.max(...productList.map((p)=>p.id), 0) + 1;
    setProductList([...productList, product])
  }

  const updateProduct = (product: IProduct) => {
    setProductList(productList.map((p) => p.id === product.id? product : p))
  }


  const deleteProduct = (product: IProduct) => {
    setProductList(productList.filter((p)=> p.id !== product.id))
  }

  return (
    <div>
      <MyForm addProduct = {addProduct}/>
      <ProductList
        products={productList}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};

export default HomePage;
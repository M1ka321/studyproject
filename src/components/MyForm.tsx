import React, {useState} from 'react';
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import {IProduct} from "./Product";


const initValue: IProduct = {
  id: 0,
  count: 1,
  inCart: false,
  name: "",
  price: 0,
}

interface MyFormProps  {
  addProduct: (product:IProduct) => void
}
const MyForm = ({addProduct}:MyFormProps) => {



  const [product, setProduct] = useState<IProduct>(initValue)
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement>= (e) => {
    e.preventDefault()
    addProduct(product)
    setProduct(initValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <MyInput type="text" name="name" value={product.name} handleChange={handleChange}/>
      <MyInput type="number" name="count" value={product.count} handleChange={handleChange}/>
      <MyInput type="number" name="price" value={product.price} handleChange={handleChange}/>
      <MyButton type="submit">
        Добавить товар
      </MyButton>

    </form>
  );
};

export default MyForm;
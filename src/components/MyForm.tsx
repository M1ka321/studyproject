import React, {useState} from 'react';
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import {IProduct} from "./Product";

const initvalue: IProduct = {
  id: 0,
  count: 1,
  inCart: false,
  name: "",
  price: 0,
}
const MyForm = () => {

  const showAlert = () => {
    alert('Нажата кнопка')
  }

  const [product, setProduct] = useState<IProduct>(initvalue)
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });

    console.log(product)

  }
  return (
    <form>
      <MyInput name="name" value={product.name} handleChange={handleChange}/>
      <MyInput name="count" value={product.count} handleChange={handleChange}/>
      <MyInput name="price" value={product.price} handleChange={handleChange}/>
      <MyButton onClick={showAlert}>
        Добавить товар
      </MyButton>

    </form>
  );
};

export default MyForm;
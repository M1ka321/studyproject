import React from 'react';
import Product, {IProduct} from "./Product";

interface ProductListProps{
  products: IProduct[];
}

const ProductList = () => {
  const products:IProduct[] = [
    {
      id: 1,
      name: "Apple",
      price: 10,
      count: 25,
      inCart: true
    },
    {
      id: 2,
      name: "Grape",
      price: 25,
      count: 120,
      inCart: true
    },
    {
      id: 3,
      name: "Pineapple",
      price: 85,
      count: 2,
      inCart: true
    },
    {
      id: 4,
      name: "Banana",
      price: 12,
      count: 5,
      inCart: true
    }
  ]
  return (
    <div>
      {
      products.map(product => <Product key={product.id} product={product}/>)
      }
    </div>
  );
};

export default ProductList;
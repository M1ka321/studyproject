import React from 'react';

export interface IProduct {
  id: number,
  name: string,
  count: number,
  price: number,
  inCart: boolean
}

interface ProductProps {
  product: IProduct
}
const Product = (props :ProductProps) => {
  // const product = props.product
  const {product} = props
  return (
    <div>
      <span className="span">{product.inCart && "!!!!"}</span>
      <span className="span">{product.name}</span>
      <span className="span">{product.count}</span>
    </div>
  );
};

export default Product;
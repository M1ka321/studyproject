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
  const {count, inCart, name, price} = product

  return (
    <div>
      <span className="span">{inCart && "✓"}</span>
      <span className="span">{name}</span>
      <span className="span">{count}</span>
      <span className="span">{price}</span>
      <span className="span">{price*count}</span>
      <button>+1</button>
      <button>-1</button>
    </div>
  );
};

export default Product;
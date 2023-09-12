import React from 'react';
import Product, {IProduct} from "./Product";

interface ProductListProps{
  products: IProduct[];
  deleteProduct: (product: IProduct)=>void
  updateProduct: (product: IProduct)=>void
}

const ProductList = ({products, updateProduct, deleteProduct} :ProductListProps,) => {

  return (
    <div>
      {
      products.map(product =>
        <Product
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
        key={product.id}
        product={product}
      />)
      }
    </div>
  );
}



export default ProductList;
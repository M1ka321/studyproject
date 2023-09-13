import React, {ReactElement, useReducer} from 'react';
import {ProductsContext, ProductsDispatchContext} from "./productsContext";
import {productReducer} from "../../store/ProductReducer";

interface ProductsProviderProps {
  children: ReactElement[]
}

const ProductsProvider = ({children}:ProductsProviderProps) => {
  const initialState = [
    { id: 1, count: 1, name: "Бананы", inCart: false, price: 1000 },
  ]
  const [productList, dispatch] = useReducer(productReducer, initialState);
  return (
   <ProductsContext value={productList}>
     <ProductsDispatchContext value={dispatch}>
       {children}
     </ProductsDispatchContext>
   </ProductsContext>
  );
};

export default ProductsProvider;
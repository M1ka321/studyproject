import React from 'react';
import MyForm from "../components/MyForm";
import ProductList from "../components/ProductList";

import ThemesChanger from "../components/ThemeChanger";
import ProductsProvider from "../context/ProductContext/ProductsProvider";



const HomePage = () => {


    const addProduct = (product: IProduct) => {
        dispatch({
            type: "add",
            payload: product
        })
    };
    const updateProduct = (product: IProduct) => {
        dispatch({
            type: "update",
            payload: product,
        })
    }
    const deleteProduct = (product: IProduct) => {
        dispatch({
            type: "delete",
            payload: product,
        })
    }

    return (
      <>
          <div className="row">
              <div className="col-12">
                  <ThemesChanger />
              </div>
          </div>
          <div className="row">
              <div className="col-12">
                  <MyForm addProduct={addProduct} />
              </div>
          </div>
          <ProductsProvider>
              <div className="row">
                  <div className="col-12">
                      <ProductList
                        products={productList}
                        updateProduct={updateProduct}
                        deleteProduct={deleteProduct}
                      />
                  </div>
              </div>
          </ProductsProvider>
      </>

    );
};

export default HomePage;
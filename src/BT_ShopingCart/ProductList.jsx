import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, onSelectProduct }) {
  const handleGetProduct = (product) => {
    onSelectProduct(product);
  };

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4">
            <ProductItem
              product={product}
              onSelectProduct={handleGetProduct}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;

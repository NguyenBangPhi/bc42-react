import React from "react";

function ProductDetails({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}

export default ProductDetails;

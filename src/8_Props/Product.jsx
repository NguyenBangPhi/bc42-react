import React from "react";

function Product({ name, price, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart({ name, price });
  };

  return (
    <h3>
      {name} - {price}$ - <button onClick={handleAddToCart}>Add To Cart</button>
    </h3>
  );
}

export default Product;

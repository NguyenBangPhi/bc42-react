import React, { useState } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

function ShopingCart() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleGetProduct = (product) => {
    // Giá trị product chỉ tồn tại bên trong hàm handleGetProduct
    // ?: Làm thế nào để đưa giá trị product xuống component ProductDetails
    // => Lưu giá trị của product vào state
    setSelectedProduct(product);
  };

  return (
    <div className="container">
      <h1 className="text-center">FPT Shop</h1>

      <ProductList products={data} onSelectProduct={handleGetProduct} />
      <ProductDetails product={selectedProduct} />
    </div>
  );
}

export default ShopingCart;

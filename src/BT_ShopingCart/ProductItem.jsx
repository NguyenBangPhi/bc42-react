import React from "react";

function ProductItem({ product, onSelectProduct, onAddToCart }) {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        className="card-image"
        height="350px"
      />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}</p>
        {/* Xem chi tiết */}
        <button
          className="btn btn-dark"
          onClick={() => onSelectProduct(product)}
        >
          Xem chi tiết
        </button>
        {/* Thêm giỏ hàng */}
        <button
          className="btn btn-success"
          onClick={() => onAddToCart(product)}
        >
          Thêm giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default ProductItem;

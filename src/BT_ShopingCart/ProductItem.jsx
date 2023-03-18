import React from "react";

function ProductItem({ product, onSelectProduct }) {
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
        <button
          className="btn btn-dark"
          onClick={() => onSelectProduct(product)}
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}

export default ProductItem;

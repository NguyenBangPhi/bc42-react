import React, { useState } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function ShopingCart() {
  // state quản lý sản phẩm đang được chọn để xem chi tiết
  const [selectedProduct, setSelectedProduct] = useState(null);
  // state quản lý trạng thái ẩn/hiện của giỏ hàng
  const [isOpen, setIsOpen] = useState(false);
  // state quản lý các sản phẩm được thêm vào giỏ hàng
  const [carts, setCarts] = useState([]);

  const handleGetProduct = (product) => {
    // Giá trị product chỉ tồn tại bên trong hàm handleGetProduct
    // ?: Làm thế nào để đưa giá trị product xuống component ProductDetails
    // => Lưu giá trị của product vào state
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    // Tìm xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const index = carts.findIndex((item) => item.id === product.id);

    if (index === -1) {
      // Chưa tồn tại => Thêm sản phẩm vào giỏ hàng và đặt số lượng là 1
      const newProduct = { ...product, quantity: 1 };
      setCarts([...carts, newProduct]);
    } else {
      // Đã tồn tại => Tăng số lượng của sản phẩm lên 1
      const newCarts = [...carts];
      newCarts[index].quantity += 1;
      setCarts(newCarts);
    }
  };

  const handleDeleteProductFromCart = (productId) => {
    const newCarts = carts.filter((item) => item.id !== productId);
    setCarts(newCarts);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    const newCarts = carts.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + quantity };
      }

      return item;
    });

    setCarts(newCarts);
  };

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalItems = carts.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="container">
      <h1 className="text-center">FPT Shop</h1>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-danger" onClick={() => setIsOpen(true)}>
          Giỏ hàng
          {totalItems > 0 && <span className="ms-2">({totalItems})</span>}
        </button>
      </div>
      <ProductList
        products={data}
        onSelectProduct={handleGetProduct}
        onAddToCart={handleAddToCart}
      />
      <ProductDetails product={selectedProduct} />
      <Cart
        carts={carts}
        onDelete={handleDeleteProductFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default ShopingCart;

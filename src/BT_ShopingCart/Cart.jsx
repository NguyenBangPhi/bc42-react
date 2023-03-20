import React from "react";

function Cart({ carts, onDelete, onUpdateQuantity, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={item.image}
                            alt={item.name}
                            width="70px"
                            height="70px"
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn btn-primary"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                          >
                            +
                          </button>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.quantity * item.price}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => onDelete(item.id)}
                          >
                            Xoá
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show" />
    </>
  );
}

export default Cart;

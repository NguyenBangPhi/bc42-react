import React from "react";

function ConditionalRendering() {
  // isLoggedIn thể hiện xem user đã đăng nhập hay chưa
  let isLoggedIn = true;
  // content chứa JSX dựa vào điều kiện của biến isLoggedIn
  let content = null;

  let isActive = true;

  if (isLoggedIn) {
    content = <h1>Welcome to Cybersoft</h1>;
    // content = <Dashboard />
  } else {
    content = <h1>Login to Cybersoft</h1>;
  }

  return (
    <div>
      {content}

      {/* Nếu muốn hiển thị theo điều kiện bên trong JSX ta dùng toán tử bậc 3 */}
      {isActive ? <h3>Activated</h3> : <h3>Unactivated</h3>}

      {/* Trong trường hợp chỉ muốn kiểm tra điều kiện đúng để hiển thị */}
      {/* {isActive ? <h3>Activated</h3> : null} */}
      {isActive && <h3>Activated</h3>}
    </div>
  );
}

export default ConditionalRendering;

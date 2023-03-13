// NOTE: Chương trình trên lớp sẽ tập trung học state bằng function component (Hiện đang được sử dụng nhiều), Các bạn có thể xem thêm cách sử dụng state bằng class component trong phần video xem thêm

import React, { useState } from "react";

// useState là một hook của React dùng để tạo và quản lý state trong function component
// Các đặc tính của state:
// - Khi giá trị của state bị thay đổi component sẽ được chạy lại (re-render)
// - Giá trị của state sẽ được giữ nguyên ở các lần re-render

function State() {
  // useState nhận vào 1 tham số là giá trị khởi tạo và trả về một array gồm 2 phần tử
  // Phần tử 1: Giá trị của state
  // Phần tử 2: Hàm dùng để thay đổi giá trị của state
  // Lưu ý: Không được thay đổi trực tiếp giá trị của state, mà phải thông qua hàm setter
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [colors, setColors] = useState(["red", "green", "blue"]);
  const handleAddColor = () => {
    const color = prompt("Input your color:"); // yellow
    // Output: ["red", "green", "blue", "yellow"]

    // Bởi vì không được thay đổi trực tiếp state mà phải thông qua setter nên ta không thể dùng colors.push(color)
    // Sử dụng spread operator để sao chép những giá trị hiện có của state và thêm một phần tử mới vào
    // => Luôn tạo ra 1 array mới và thay đổi trên nó, sau đó đưa array mới này vào hàm setter
    setColors([...colors, color]);
  };
  const handleRemoveColor = () => {
    const color = prompt("Input your color:");
    const newColors = colors.filter((item) => item !== color);
    setColors(newColors);
  };

  return (
    <div>
      <h1>State</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <hr />

      {isLoggedIn ? (
        <div>
          <h1>Welcome back!!!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Login!!!</h1>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
      )}

      <hr />
      <p>Colors: {colors.join(", ")}</p>
      <button onClick={handleAddColor}>Add color</button>
      <button onClick={handleRemoveColor}>Remove color</button>
    </div>
  );
}

export default State;

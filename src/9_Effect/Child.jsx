import React, { useState, useEffect } from "react";

function Child({ count }) {
  const [total, setTotal] = useState(0);

  // Dùng useEffect để đọc giá trị mới nhất của props hoặc state
  useEffect(() => {
    // Dùng giá trị mới nhất của prop count để thực hiện một hành động nào đó

    // Ví dụ: Ta có một state total, ta muốn mỗi khi prop count thay đổi, dùng giá trị của prop count để tính toán giá trị của state total
    setTotal(total + count);
  }, [count]);

  // Trong hàm setup của useEffect nếu có return về một function, được gọi là cleanup effect
  useEffect(() => {
    // effect
    console.log("Child component mounted");

    const handler = () => console.log("Mouse move");
    document.addEventListener("mousemove", handler);

    // cleanup effect: sẽ được chạy trước khi component bị huỷ bỏ
    return () => {
      console.log("Child component unmounted");

      // Một trong những trường hợp cần sử dụng cleanup effect là remove event listener khi component bị huỷ bỏ
      document.removeEventListener("mousemove", handler);
    };
  }, []);

  return (
    <div>
      <h1>Child</h1>
      <p>Total: {total}</p>
    </div>
  );
}

export default Child;

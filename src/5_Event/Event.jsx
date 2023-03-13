import React from "react";

// html: <button onclick="handleClick()">Click</button>

function Event() {
  // Lưu ý: Định nghĩa các hàm sử lý sự kiện bên trong component
  // Hàm xử lý sự kiện click cho button
  const handleClick = () => {
    alert("Clicked");
  };

  // Hàm xử lý sự kiện change cho input
  // Tất cả sự kiện đều sẽ nhận được một đối tượng event
  // event.target: element gốc phát sinh ra sự kiện
  const handleChange = (event) => {
    console.log("value:", event.target.value);
  };

  // Hàm sử lý sự kiện click của button Get Message
  const handleGetMessage = (message) => {
    alert(`Message: ${message}`);
  };

  return (
    <div>
      <h1>Event</h1>

      {/* Lưu ý: onClick={handleClick} không bao gồm cặp ngoặc tròn ở cuối */}
      {/* Không gọi hàm xử lý sự kiện, ta chỉ đưa nó vào trong onClick và React sẽ tự gọi đến hàm đó khi user click vào button */}
      <button onClick={handleClick}>Click</button>
      {/* <button onClick={() => alert("Clicked")}>Click</button> */}

      <hr />

      <input onChange={handleChange} />

      <hr />

      {/* Nếu hàm xử lý sự kiện cần nhận vào tham số, ta sẽ đưa vào onClick một hàm ẩn danh (thường viết bằng arrow function), Khi user click vào button, React sẽ gọi tới hàm ẩn danh này, và hàm này sẽ gọi tới hàm xử lý sự kiện và truyền vào tham số */}
      <button onClick={() => handleGetMessage("Hello BC42")}>
        Get Message
      </button>
    </div>
  );
}

export default Event;

import React, { useState } from "react";

function SelectCar() {
  // State dùng để lưu trữ đường dẫn hình ảnh của xe sẽ được hiển thị ra UI
  const [carUrl, setCarUrl] = useState("./img/black-car.jpg");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <img src={carUrl} alt="car" width="100%" height="auto" />
        </div>
        <div className="col-md-4">
          <ul class="list-group">
            <li
              class="list-group-item d-flex"
              onClick={() => setCarUrl("./img/black-car.jpg")}
            >
              <img src="./img/icon-black.jpg" alt="icon-black" width="50px" />
              <h3 className="ms-2">Crystal Black</h3>
            </li>
            <li
              class="list-group-item d-flex"
              onClick={() => setCarUrl("./img/steel-car.jpg")}
            >
              <img src="./img/icon-steel.jpg" alt="icon-steel" width="50px" />
              <h3 className="ms-2">Modern Steel</h3>
            </li>
            <li
              class="list-group-item d-flex"
              onClick={() => setCarUrl("./img/silver-car.jpg")}
            >
              <img src="./img/icon-silver.jpg" alt="icon-silver" width="50px" />
              <h3 className="ms-2">Lunar Silver</h3>
            </li>
            <li
              class="list-group-item d-flex"
              onClick={() => setCarUrl("./img/red-car.jpg")}
            >
              <img src="./img/icon-red.jpg" alt="icon-red" width="50px" />
              <h3 className="ms-2">Rallye Red</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelectCar;

import React from "react";
import data from "./data.json";
import ShoeItem from "./ShoeItem";

console.log("Data:", data);

function ShoeShop() {
  return (
    <div className="container">
      <h1 className="text-center">Shoe Shop</h1>

      <div className="row">
        {data.map((item) => {
          return (
            <div key={item.id} className="col-sm-4">
              <ShoeItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoeShop;

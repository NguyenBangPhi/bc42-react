import React from "react";
import Welcome from "./Welcome";
import Card from "./Card";
import Button from "./Button";
import Product from "./Product";

function Props() {
  let user = {
    name: "Bob",
    email: "bob@gmail.com",
  };

  const handleClick = () => {
    alert("clicked");
  };

  const handleAddToCart = (product) => {
    console.log(product);
  };

  return (
    <div>
      <h1>Props</h1>
      <Welcome name="John" email="john@gmail.com" />
      <Welcome name={user.name} email={user.email} />
      <Welcome />

      <hr />

      {/* Children */}
      <Card>
        <h3>User</h3>
        <Welcome name="Alice" email="alice@gmail.com" />
      </Card>

      <hr />

      {/* Props là function */}
      <Button onClick={handleClick}>Click</Button>
      <Product name="Iphone 14" price={1500} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default Props;

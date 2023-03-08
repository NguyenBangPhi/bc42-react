import React from "react";

function Databinding() {
  let msg = "Hello BC42";
  let imgUrl = "https://picsum.photos/200/300";
  let user = {
    name: "Alice",
    email: "alice@gmail.com",
  };

  return (
    <div>
      <h1>{msg}</h1>
      <img src={imgUrl} alt="images" />

      <p>{user.name}</p>
      <input value={user.email} />
    </div>
  );
}

export default Databinding;

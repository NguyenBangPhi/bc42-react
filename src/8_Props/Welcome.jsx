import React from "react";

function Welcome({ name = "unknow", email = "unknow" }) {
  return (
    <h3>
      Hello {name} - {email}
    </h3>
  );
}

export default Welcome;

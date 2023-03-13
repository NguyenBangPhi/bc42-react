import React from "react";
import Child from "./Child";

// Import css
import "./style.css";

// Import css module
import styles from "./style.module.css";

function Style() {
  return (
    <div>
      <h1>Style</h1>

      {/* Inline style */}
      <h1 style={{ backgroundColor: "red", color: "white" }}>Hello Reactjs</h1>

      {/* CSS */}
      <h1 className="heading">Hello BC42</h1>
      <Child />

      {/* CSS Module */}
      <h1 className={styles.heading}>Hello CSS Module</h1>
    </div>
  );
}

export default Style;

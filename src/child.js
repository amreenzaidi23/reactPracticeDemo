import React from "react";

function clickHandler() {
  function display() {
    console.log("hello child display");
  }
  return (
    <div>
      <button onClick={display}>Click CHild</button>
    </div>
  );
}
export default clickHandler;

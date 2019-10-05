import React from "react";

function clickHandler(props) {
  return (
    <div>
      <button onClick={() => props.greets("Aayat")}>Click Child</button>
    </div>
  );
}
export default clickHandler;

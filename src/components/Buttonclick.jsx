import React, { useState } from "react";
function Buttonclick() {
  const [clickCount, setclickCount] = useState(0);
  const handleclick = () => {
    return <h1>{`you have clicked me ${clickCount} times`}</h1>;
  };
  return (
    <div>
      <img src={""} />
      {handleclick()}
      <button onClick={() => setclickCount(clickCount + 1)}>Click me</button>
    </div>
  );
}

export default Buttonclick;

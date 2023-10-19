import React, { useState } from "react";

function Shopingcart({ id, onDelete }) {
  const Tag = ["tag1", "tag2", "tag3"];
  const [clickCount, setclickCount] = useState(0);

  const renderingTags = () => {
    if (Tag.length === 0) return <p>There are no tags!</p>;
  };

  const handleincrement = () => {
    setclickCount(clickCount + 1);
  };

  const remove = () => {
    if (clickCount !== 0) {
      setclickCount(clickCount - 1);
    } else {
      alert("cart value is already zero");
    }
  };

  return (
    <div>
      {renderingTags()}
      <button>{clickCount}</button>
      <button onClick={handleincrement}>click here</button>
      <button onClick={remove}>-</button>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
}
export default Shopingcart;

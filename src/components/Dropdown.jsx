import React, { useState } from "react";

function Dropdown() {
  const [selects, setselects] = useState();
  const handle = (e) => {
    setselects(e.target.value);
  };
  return (
    <div my-3>
      <h1>{selects}</h1>
      <select value={selects} onChange={handle}>
        <option>Click here</option>
        <option>Orange</option>
        <option>Mango</option>
        <option>Apple</option>
      </select>
    </div>
  );
}

export default Dropdown;

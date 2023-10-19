import React, { useState } from "react";

function Textform(props) {
  const [userErr, setuserErr] = useState("");
  const [passErr, setpassErr] = useState("");
  const namehandler = (e) => {
    let item = e.target.value;
    if (item.length < 5) {
      setuserErr(true);
    } else {
      setuserErr(false);
    }
  };
  const passwordhandler = (e) => {
    let item = e.target.value;
    const hascapital = /[A-Z]/.test(item);
    const hasspecial = /[!@#$%^&*]/.test(item);
    const isPasswordValid = item.length >= 8 && hascapital && hasspecial;

    if (!isPasswordValid) {
      setpassErr(true);
    } else {
      setpassErr(false);
    }
  };

  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <label>UserName:</label>
      <input type="text" onChange={namehandler} />
      {userErr ? <span>Not valid</span> : null}
      <br></br>

      <label>Email:</label>
      <input type="email" placeholder="abcd@gmail.com" />
      <br></br>
      <label>Password:</label>
      <input type="password" onChange={passwordhandler} placeholder="*****" />
      {passErr ? <span>Not Valid</span> : null}
      <br></br>
      <label for="myBox" className="form-label">
        Description
      </label>
      <textarea className="form-control" id="myBox" rows="5"></textarea>
      <button>Submit</button>
    </div>
  );
}

export default Textform;

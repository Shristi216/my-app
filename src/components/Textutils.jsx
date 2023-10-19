import React, { useState } from "react";

function Textutils() {
  const [text, setText] = useState("Enter text here");
  const [emailextract, setextractedmail] = useState([]);
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const Convertup = () => {
    console.log("uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleclear = () => {
    const clrtext = "";
    setText(clrtext);
  };
  const EmailExtract = () => {
    const emailRegex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/g;
    const foundEmails = text.match(emailRegex) || [];
    setextractedmail(foundEmails);
  };

  return (
    <div className="container">
      <h1> Text Handler</h1>
      <label for="myBox" className="form-label">
        Description
      </label>
      <textarea
        className="form-control"
        value={text}
        onChange={handleonchange}
        id="myBox"
        rows="5"
      ></textarea>
      <button onClick={Convertup}>convert Uppercase</button>
      <button value={text} onClick={handleclear}>
        Clear text
      </button>
      <button onClick={EmailExtract}>Extract Email</button>

      <h1 my-3> Text Summary</h1>
      <p>
        {text.length}-characters <br></br> {text.split(" ").length}-words
      </p>
      <h2 my-2>Preview</h2>
      <p>{text}</p>
      <h2>Extracted emails</h2>
      <ul>
        {emailextract.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Textutils;

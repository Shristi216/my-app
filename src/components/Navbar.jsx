import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import propTypes from "prop-types";

function Navbar(props) {
  const [mystyle, setmystyle] = useState({
    backgroundColor: "black",
    color: "white",
  });

  const navigate = useNavigate();
  const [darktext, setdark] = useState("Enable dark mode");
  const gotoCounter = () => {
    navigate("/counter");
  };

  const gotobuttons = () => {
    navigate("/butttons");
  };

  const gotomaps = () => {
    navigate("/maps");
  };

  const textform = () => {
    navigate("/form");
  };

  const utils = () => {
    navigate("/utils");
  };

  const handledarktext = () => {
    if (mystyle.color == "white") {
      setmystyle({ backgroundColor: "white", color: "black" });
      setdark("Enable dark mode");
    } else {
      setmystyle({ backgroundColor: "black", color: "white" });
      setdark("Enable light mode");
    }
  };
  return (
    <div style={mystyle}>
      <nav className=" navbar navbar-light ">
        <a className="navbar-brand" href="#" style={mystyle}>
          {props.title}
        </a>
        <a className="navbar-brand" href="#" style={mystyle}>
          {props.about}
        </a>

        {/* {/* ///////////////////using link tag //////////////////////////*} */}
        <a>
          <Link to="/textform">
            <button>Fill Form</button>
          </Link>
        </a>

        <a>
          <button onClick={utils}>TextUtils</button>
        </a>
        <a>
          <button onClick={() => gotobuttons()}>Buttonclick</button>
        </a>
        <a>
          <button onClick={gotoCounter}>Counter</button>
        </a>
        <a>
          <button onClick={() => gotomaps()}>Mapping</button>
        </a>
        <a>
          <button onClick={handledarktext}>{darktext}</button>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  /// this justifies the type to be string int char
  title: propTypes.string,
  about: propTypes.string,
};

Navbar.defaultProps = {
  // if props are not passed from parent then this will be used
  title: " learner by default",
  about: " about by default",
};

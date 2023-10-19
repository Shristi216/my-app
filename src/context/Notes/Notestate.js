import React from "react";
import NoteContext from "./Notecontest";

function Notestate(props) {
    const state={
        "name":"harry",
        "class":"abc"
    }
  return <NoteContext.Provider value={state}>
    {props.children}
  </NoteContext.Provider>;
}

export default Notestate;

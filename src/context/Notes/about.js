import React,{useContext}  from 'react'
import NoteContext from './NoteContext'
function about() {
  const a = useContext(NoteContext); // Use the imported context

  return <div>This is about {a.name}</div>;
}

export default about

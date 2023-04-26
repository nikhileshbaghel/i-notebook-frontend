import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
      const host = "http://13.113.192.171"           // backend url changed from "https://inotebook-backend-17.herokuapp.com" to http://13.113.192.171/
      const notesInitial = [];
      const [notes, setNotes] = useState(notesInitial);
     
      // Get all Notes
      
  const getNotes = async () => {
    //console.log(localStorage.getItem('token'));
   // console.log(localStorage.getItem('token1'));
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const notes = await response.json()
    //console.log(notes)
    setNotes(notes)
  }

      // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    //console.log(note)
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id) => {

    if(window.confirm("do you really want to delete your specified note")){
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json();
   // console.log(json)

    //console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
  }


  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json)
    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
  
    setNotes(newNotes);
   // console.log(newNotes);

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}

export default NoteState;

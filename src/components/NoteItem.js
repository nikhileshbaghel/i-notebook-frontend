import React, {useContext} from 'react'
import noteContext from "../context/notes/NoteContext"


const NoteItem = (props) => {
   const {note , updateNote} = props;
   const context = useContext(noteContext);
   
    const { deleteNote } = context;
    return (<>
        <div className="col-md-3">
        <div className="card my-3">
            <div className="card-body bg-light">
            <h5 className="card-header">{note.tag}</h5>
                <div className="d-flex align-items-center">
                    <h5 className="card-title mx-3">{note.title}</h5>
                    <i className="far fa-trash-alt mx-1" onClick={()=>{deleteNote(note._id)}}></i>
                    <i className="far fa-edit mx-1" onClick={() => {updateNote(note)}}></i>
                </div>
                <p className="card-text mx-3">{note.description}</p>
            </div>
        </div>
    </div>
</>
  )
}

export default NoteItem
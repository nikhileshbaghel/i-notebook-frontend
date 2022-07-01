import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/NoteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = async(e)=>{
        e.preventDefault(); //so that page will not reload.
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""}); //so that after submiting it will again take  null 
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
       // console.log(note.title);  
    }
    return (

        <>

<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <div className="container my-3">
            <h2>Hi..  {localStorage.getItem('name')} </h2>
            <h3>Add Your Note</h3>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title"  value={note.title} aria-describedby="emailHelp" onChange={onChange} /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description}  onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag}  aria-describedby="emailHelp" onChange={onChange} /> 
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary"  onClick={handleClick}>Add Note</button>
            </form>
        </div>
      </div>

      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image" />
      </div>

    </div>
  </div>
  
</section>

        

        </>
    )
}

export default AddNote
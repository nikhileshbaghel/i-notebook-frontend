import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = (props) => {
    

    const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword: ""}) 
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password, cpassword} = credentials;
        const response = await fetch("https://skv8e3qmtg.execute-api.ap-northeast-1.amazonaws.com/api/auth/createuser", {         ////     http://54.199.33.25/     
            method: 'POST',                                                                                       //   "https://inotebook-backend-17.herokuapp.com/api/auth/createuser"
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email, password,cpassword})
        });
        const json = await response.json()
        //console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/");
            alert("account has been created successfully","success");

        }
        else{
            alert("Invalid credentials","danger!");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }


    return (
        <div className="container mt-2">
        <h2>Create an account to use iNotebook</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={onChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
          </div>
          <button disabled={credentials.name.length < 5 || credentials.email.length < 5 || credentials.password.length < 5 || credentials.cpassword.length < 5 || credentials.password !== credentials.cpassword} type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
}

export default Signup

import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://3.112.37.186/api/auth/login", {  //http://54.199.33.25/  <--  https://inotebook-backend-17.herokuapp.com
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
       // console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);  //token saved to that user...
            navigate("/home");
        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (

        <>


<div className='justify-content-center'>
<section className="h-100 gradient-form" style={{"backgroundColor": '#eee'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{"width": "185px"}} alt="logo" />
                  <h4 className="mt-1 mb-5 pb-1">Welcome to INotebook App</h4>
                </div>

                <form  onSubmit={handleSubmit} >
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example11" className="form-control"
                      placeholder="Email address" name="email" value={credentials.email} onChange={onChange} />
                    <label className="form-label" htmlFor="form2Example11">Email</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example22" placeholder="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
                    <label className="form-label" htmlFor="form2Example22">Password</label>
                  </div>

                  <button type="submit" className="text-center pt-1 mb-5 pb-1 btn btn-primary">Login.</button>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">INotebook - save your notes securely.</h4>
                <p className="small mb-0">INotebook is note taking app where one can store their notes anytime from anywhere.Notes is a good helper to manage your schedules and notes. It gives you a quick and simple notepad editing experience when you write notes, email, message, shopping list and to do list. It makes to take a note easier than any other notepad at just one click.</p>
                <p className="small mb-0">Login for better experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
        </>
    )
}

export default Login

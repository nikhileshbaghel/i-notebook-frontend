import React, {useState} from 'react'

const UserWithLogin=()=> {
    const Userinfo = async () => {
        const response = await fetch("https://52zy3vfzff.execute-api.ap-northeast-1.amazonaws.com/api/auth/getuser", {   //backend url changed  // from https://inotebook-backend-17.herokuapp.com/ to 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':localStorage.getItem('token')
            }
        });
        const user = await response.json()
       // console.log(user);
        localStorage.setItem('name',user.name);
    }

    Userinfo();
  return (
      <>

<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image" />
           <br />
           <br />
           <br />
          <h1>INotebbok</h1>
          <h6>All your Notes at one place secure and safe.</h6>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <h2>Hello {localStorage.getItem('name')} </h2>
          <p>Hope you are enjoying the INotebook services. Go to home page to see all your notes. we ensure the privacy of every user. </p>
          <p className="small mb-0">   INotebook is note taking app where one can store their notes anytime from anywhere.Notes is a good helper to manage your schedules and notes. It gives you a quick and simple notepad editing experience when you write notes, email, message, shopping list and to do list. It makes to take a note easier than any other notepad at just one click.</p>
      </div>
    </div>
  </div>
</section>
     </>
  )
}

export default UserWithLogin

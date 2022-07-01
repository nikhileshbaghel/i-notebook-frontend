import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Link,useLocation
} from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
      if(localStorage.getItem('token'))
      {
        //do nothing
      }
      else{
        navigate('/login');
      }
  }, []);

  const logOut = () => {

    if(window.confirm("do you really want to logout!") === true)
    {
      localStorage.setItem('token',"");
      navigate('/login');
    }

  }

    //window.localStorage.removeItem('token');
   
        return(
          
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className= {`nav-link ${(location.pathname==='/home')?"active":""}`} aria-current="page" to="/home">Home</Link>
        </li>
        {/*<li className="nav-item">
          <Link className={`nav-link ${(location.pathname==='/about')?"active":""}`} aria-current="page" to="/about">About</Link>
        </li>*/}
        
      </ul>
      {localStorage.getItem('token') ?<>
      <form className="d-flex"> 
               <Link  className="btn btn-primary mx-2" to="/logout" role="button" onClick={logOut}>LogOut</Link>
      </form>
      </>:<form className="d-flex"> 
             {(location.pathname!=='/login') ? <Link  className="btn btn-primary mx-2" to="/login" role="button">Login</Link> : <></>}
               <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
      </form> }
    </div>
  </div>
</nav>
          
        )
    
};

export default Navbar;
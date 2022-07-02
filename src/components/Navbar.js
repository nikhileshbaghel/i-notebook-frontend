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
          
              
         <div className="m-4">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                      <Link className= {`nav-link ${(location.pathname==='/')?"active":""}`} to="/"><i>iNoteBook</i></Link>
                    <Link className= {`nav-link ${(location.pathname==='/home')?"active":""}`} aria-current="page" to="/home">Home</Link>
                   
                </div>
                <div className="navbar-nav ms-auto">
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
        </div>
    </nav>
</div>
          
        )
    
};

export default Navbar;

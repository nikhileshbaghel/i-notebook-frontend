import './App.css';
import { BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';

import UserInfo from './components/UserInfo';

import NoteState from './context/notes/NoteState';


function App() {
  return (
  <>
   <NoteState>

    <Router>
    <Navbar />

    <Routes>
    <Route path='/' element={<UserInfo/>}>
     </Route>
      <Route path='/about' element={<About />}>
     </Route>
     <Route path='/home' element={<Home/>}>
     </Route>
     <Route path="/login"  element={<Login />}>
     </Route>
     <Route path="/logout"  element={<Login />}>
     </Route>
     <Route path="/signup"  element={<Signup />}>
     </Route>
      </Routes>

      
    </Router>
    </NoteState>
  </>
     
  );
}

export default App;

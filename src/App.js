import React from 'react';
import Contact from './Components/Contact';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import Privacy from './Components/Privacy';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/loginForm' element={<LoginForm/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
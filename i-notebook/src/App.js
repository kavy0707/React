// npm run both --> for the start react app frontend and backend both can started 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/noteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';

function App() {

  const [alert,setalert]=useState(null)
  const showalert=(message,view)=>{
    setalert({
      msg:message,
      view:view
    })
    setTimeout(()=>{
      setalert(null)
    },3000)
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />

          <Alert alert={alert}  />
          <Routes>
            <Route exact path="/login" element={<Login showalert={showalert} />} />
            <Route exact path="/signup" element={<Signup showalert={showalert} />} />
            <Route exact path="/" element={<Home showalert={showalert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

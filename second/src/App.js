import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React, { useState } from 'react';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      removeclass();
      setMode("dark");
      document.body.style.backgroundColor = "#2b2f3d"; // Dark background
    } else {
      removeclass();
      setMode("light");
      document.body.style.backgroundColor = "white"; // Light background
    }
  };

  const removeclass = () => {
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-secondary")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-success")
  }
  const toogle = (cls) => {
    console.log(cls);
    removeclass();
    document.body.classList.add("bg-" + cls)
  };

  return (
    <>
      <Router>
        <Navbar title='Add Your Title' disable='Disable Your Item' mode={mode} toggleMode={toggleMode} toogle={toogle} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Text mode={mode} />
          </Route>
        </Switch>
      </Router>

      {/* if store in github then router it make complex so remove it and execute below code */}
      {/* <Navbar title='Add Your Title' disable='Disable Your Item' mode={mode} toggleMode={toggleMode} />
      <Text mode={mode} /> */}

    </>
  );
}

export default App;

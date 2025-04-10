import './App.css';


import Navbar from './Components/Navbar';
import News from "./Components/News";
import React, { Component, useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const apiKey = "39c9fec862ae457382145f7bd4c7c62e";
  const [progress,setprogress] = useState(0)


  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route path="/" element={<News setprogress={setprogress} key="general" apiKey={apiKey} pageSize={5} country="us" category="general" />} />
          <Route path="/business" element={<News setprogress={setprogress} key="business" apiKey={apiKey} pageSize={5} country="us" category="business" />} />
          <Route path="/entertainment" element={<News setprogress={setprogress} key="entertainment" apiKey={apiKey} pageSize={5} country="us" category="entertainment" />} />
          <Route path="/general" element={<News setprogress={setprogress} key="general" apiKey={apiKey} pageSize={5} country="us" category="general" />} />
          <Route path="/health" element={<News setprogress={setprogress} key="health" apiKey={apiKey} pageSize={5} country="us" category="health" />} />
          <Route path="/science" element={<News setprogress={setprogress} key="science" apiKey={apiKey} pageSize={5} country="us" category="science" />} />
          <Route path="/sports" element={<News setprogress={setprogress} key="sports" apiKey={apiKey} pageSize={5} country="us" category="sports" />} />
          <Route path="/technology" element={<News setprogress={setprogress} key="technology" apiKey={apiKey} pageSize={5} country="us" category="technology" />} />
          <Route path="/technology" element={<News setprogress={setprogress} key="technology" apiKey={apiKey} pageSize={5} country="uk" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
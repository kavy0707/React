import './App.css';
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apiKey = "39c9fec862ae457382145f7bd4c7c62e";

  state = {
    progress: 0,
  };

  setprogress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route path="/" element={<News setprogress={this.setprogress} key="general" apiKey={this.apiKey} pageSize={5} country="us" category="general" />} />
            <Route path="/business" element={<News setprogress={this.setprogress} key="business" apiKey={this.apiKey} pageSize={5} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setprogress={this.setprogress} key="entertainment" apiKey={this.apiKey} pageSize={5} country="us" category="entertainment" />} />
            <Route path="/general" element={<News setprogress={this.setprogress} key="general" apiKey={this.apiKey} pageSize={5} country="us" category="general" />} />
            <Route path="/health" element={<News setprogress={this.setprogress} key="health" apiKey={this.apiKey} pageSize={5} country="us" category="health" />} />
            <Route path="/science" element={<News setprogress={this.setprogress} key="science" apiKey={this.apiKey} pageSize={5} country="us" category="science" />} />
            <Route path="/sports" element={<News setprogress={this.setprogress} key="sports" apiKey={this.apiKey} pageSize={5} country="us" category="sports" />} />
            <Route path="/technology" element={<News setprogress={this.setprogress} key="technology" apiKey={this.apiKey} pageSize={5} country="us" category="technology" />} />
            <Route path="/technology" element={<News setprogress={this.setprogress} key="technology" apiKey={this.apiKey} pageSize={5} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
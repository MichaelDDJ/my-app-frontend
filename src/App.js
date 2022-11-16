import NavBar from './NavBar';
import Home from './Home';
import JobForm from './JobForm';
import { Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {

  require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JobForm" element={<JobForm />} />
      </Routes>
    </div>
  );
}

export default App;

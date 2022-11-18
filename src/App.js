import NavBar from './NavBar';
import Home from './Home';
import JobForm from './JobForm';
import Category from './Category';
import { Route, Routes} from 'react-router-dom';
import React ,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/Jobs")
    .then((r) => r.json())
    .then(data => setJobs(data))
  }, [])

  

  console.log(jobs)
  return (
    <div className="App">
      <Category />
    </div>
  );
  
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

import Category from './Category';
import {Route, Routes} from 'react-router-dom'
import Form from './Form';
import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './NavBar';

function App() {
  const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/Categories")
        .then((r) => r.json())
        .then(data => setCategories(data))
    }, [])
    console.log(categories)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Category categories={categories} />}/>
        <Route path="/Form" element={<Form categories={categories} />}/>
      </Routes>
    </div>
  );
}

export default App;

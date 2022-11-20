import Category from './Category';
import {Route, Routes} from 'react-router-dom'
import Form from './Form';
import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './NavBar';

function App() {
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState("")
  const [cat_id, setCat_id] = useState("")


  const optionsList = categories.map((category) => {
    return <option key={category.title} value={category.id}>{category.title}</option>
  })

    useEffect(() => {
        fetch("http://localhost:3001/Categories")
        .then((r) => r.json())
        .then(data => setCategories(data))
    }, [])
    console.log(categories)

    function handleSubmit (e) {
      fetch(`http://localhost:3001/Categories/${cat_id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          title: title,
        })
      })
      .then((r) => r.json())
      .then((data) => console.log(data))
    }

    function handleDelete () {
      fetch(`http://localhost:3001/Categories/${cat_id}`, {
        method: "DELETE"
      })
    }

  return (
    <div className="App">
      <NavBar />
      <form onSubmit={handleSubmit} className="Cat-Form">
        <input id="input" type="text" placeholder="Enter new Category name..." onChange={(e) => setTitle(e.target.value)} value={title} ></input>
        <select id="category-select" value={cat_id} onChange={(e) => setCat_id(e.target.value)}>
          {optionsList}
        </select>
        <button id="btn" >Change Category Name</button>
      </form>
      <form onSubmit={handleDelete} className="Cat-Form">
        <select id="category-select" value={cat_id} onChange={(e) => setCat_id(e.target.value)}>
          {optionsList}
        </select>
        <button id="btn" >Delete Category</button>
      </form>
      <Routes>
        <Route path="/" element={<Category categories={categories} />}/>
        <Route path="/Form" element={<Form categories={categories} />}/>
      </Routes>
    </div>
  );
}

export default App;

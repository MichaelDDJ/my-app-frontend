import Category from './Category';
import CategoryForm from './CategoryForm';
import React, {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/Categories")
        .then((r) => r.json())
        .then(data => setCategories(data))
    }, [])
    console.log(categories)

    

    //
    function handleDeleteCategory (id) {
      setCategories(categories.filter((category) => category.id !== id))
    }

    function handleDeleteJob (parent_categ_id, id) {
      const updatedCategories = categories.map((category) => {
        if (category.id === parent_categ_id) {
          const newJobs = category.jobs.filter((job) => job.id !== id)
          category.jobs = newJobs
          return category  
        } else {
            return category
        }
      })
      setCategories(updatedCategories)
    }
    

  return (
    <div className="App">
      <CategoryForm categories={categories} setCategories={setCategories} />
      <Category categories={categories} setCategories={setCategories} handleDeleteCategory={handleDeleteCategory} handleDeleteJob={handleDeleteJob} />
    </div>
  );
}

export default App;

import React, {useState} from "react";

function CategoryForm ({categories, setCategories}) {
    const [category, setCategory] = useState("")
    const [job_title, setJob_Title] = useState("")
    const [description, setDescription] = useState("")
    const [category_id, setCategory_id] = useState("")

    const optionsList = categories.map((category) => {
        return <option key={category.title} value={category.id}>{category.title}</option>
    })

    

      function handleSubmitCat (event) {
        event.preventDefault();
    
        fetch("http://localhost:3001/categories", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title: category})
        })
        .then((r) => r.json())
        .then((data) => setCategories([...categories, data]))
    
    }

    function handleSubmitJob (event) {
        event.preventDefault();

        fetch("http://localhost:3001/jobs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                job_title: job_title,
                description: description,
                category_id: category_id
            })
        })
        .then((r) => r.json())
        .then((data) => setCategories(categories.map((category) => {
            if (category.id === data.category_id) {
                category.jobs.push(data)
                return (category);
            } else {
                return category;
            }
        })))
        
    
    }

    return (
    <div>
        
        <form onSubmit={handleSubmitCat}>
            <h2>Add new category?</h2>
            <input id="input" type="text" placeholder="Enter category name..." onChange={(e) => setCategory(e.target.value)} value={category} ></input>
            <button>Submit new category</button>
        </form>
        <form onSubmit={handleSubmitJob}>
            <h2>New Job Form</h2>
            <input id="input" type="text" placeholder="Enter job title..." onChange={(e) => setJob_Title(e.target.value)} value={job_title} ></input>
            <input id="input" type="text" placeholder="Enter job description..." onChange={(e) => setDescription(e.target.value)} value={description} ></input>
            <select id="category-select" value={category_id} onChange={(e) => setCategory_id(e.target.value)}>
                {optionsList}
            </select>
            <button id="btn" >Submit new job</button>
        </form>
    </div>
    )
}

export default CategoryForm;
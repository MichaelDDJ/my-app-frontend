import React, {useState} from "react";

function JobForm({categories}) {
    const [job_title, setJob_Title] = useState("")
    const [description, setDescription] = useState("")
    const [category_id, setCat_id] = useState(``)
    const [category, setCategory] = useState("")

    const optionsList = categories.map((category) => {
        return <option key={category.title} 
        value={category.id}>{category.title}</option>
    })

    function handleSubmitJob (event) {
        event.preventDefault();

        fetch("http://localhost:3001/Jobs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                job_title: job_title,
                description: description,
                category_id: category_id
            })
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
    
    }

    function handleSubmitCat (event) {
        event.preventDefault();
        console.log(event)
    
        fetch("http://localhost:3001/Categories", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title: category})
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
    
    }

    return (
        <div className="job-form">
            <form onSubmit={handleSubmitJob}>
            <h2>New Job Form</h2>
                <input id="input" type="text" placeholder="Enter job title..." onChange={(e) => setJob_Title(e.target.value)} value={job_title} ></input>
                <input id="input" type="text" placeholder="Enter job description..." onChange={(e) => setDescription(e.target.value)} value={description} ></input>
                <select id="category-select" value={category_id} onChange={(e) => setCat_id(e.target.value)}>
                    {optionsList}
                </select>
                <button id="btn" >Submit new job</button>
            </form>
            <form onSubmit={handleSubmitCat}>
                <h5>Add new category?</h5>
                <input id="input" type="text" placeholder="Enter category name..." onChange={(e) => setCategory(e.target.value)} value={category} ></input>
                <button></button>
            </form>
        </div>
        
    )
}

export default JobForm;
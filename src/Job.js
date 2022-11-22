import React from 'react'

function Job ({title, desc, id, categories, setCategories, parent_categ_id, handleDeleteJob}) {

    function handleDelete () {
        fetch(`http://localhost:3001/Jobs/${id}`, {
            method: "DELETE"
        })
        handleDeleteJob(parent_categ_id, id)
    }
    
    return (
        <div className="job">
            <span className="job-child">{title}: </span>
            <span> {desc}</span>
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default Job;
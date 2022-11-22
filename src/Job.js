import React from 'react'

function Job ({title, desc, id, categories, setCategories, parent_categ_id, handleDeleteJob}) {

    function handleDelete () {
        fetch(`http://localhost:3001/jobs/${id}`, {
            method: "DELETE"
        })
        handleDeleteJob(parent_categ_id, id)
    }
    
    return (
        <div className="job">
            <span className="job-child">{title}: </span>
            <span className="job-child"> {desc}</span>
            <button onClick={handleDelete} className="job-child">&#128465;</button>
        </div>
    )
}

export default Job;
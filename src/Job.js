import React from 'react'

function Job ({title, desc, id}) {

    function handleDelete () {
        fetch(`http://localhost:3001/Jobs/${id}`, {
            method: "DELETE"
        })
      .then((r) => r.json())
      .then((data) => console.log(data))
    }
    
    return (
        <div className="job">
            <p className="job-child">{title}</p>
            <p>{desc}</p>
            <button className="job-child" onClick={handleDelete}>trash</button>
        </div>
    )
}

export default Job;
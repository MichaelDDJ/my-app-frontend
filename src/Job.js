import React from 'react'

function Job ({title, desc}) {
    
    return (
        <div className="job">
            <p className="job-child">{title}</p>
            <p>{desc}</p>
            <button className="job-child">fix</button>
            <button className="job-child">trash</button>
        </div>
    )
}

export default Job;
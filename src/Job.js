import React from 'react'

function Job ({title, desc}) {
    
    return (
        <div className="job">
            <p className="job-child">{title}</p>
            <p>{desc}</p>
        </div>
    )
}

export default Job;
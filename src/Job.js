import React from 'react'

function Job ({categ}) {
    //fetch
    //build job element
    return (
        <div className="job">
            <p className="job-child">Job Name</p>
            <button className="job-child">fix</button>
            <button className="job-child">trash</button>
        </div>
    )
}

export default Job;
import React, {useEffect, useState} from "react";
import Job from "./Job";

function JobList ({categ}) {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/Categories/${categ.id}`)
        .then((r) => r.json())
        .then(data => setJobs(data))
    }, [])
    
    const jobList = jobs.map((job) => {
        return <Job key={job.id} title={job.job_title} desc={job.description} />
    })

    return (
        <div>
            {jobList}
        </div>
    );

}

export default JobList;
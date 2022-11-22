import React, {useEffect, useState} from "react";
import Job from "./Job";

function JobList ({categ, categories, setCategories, handleDeleteJob}) {
    
    const jobList = categ.jobs.map((job) => {
        console.log(categ)
        return <Job key={job.id} parent_categ_id={categ.id} id={job.id} title={job.job_title} desc={job.description} categories={categories} setCategories={setCategories} handleDeleteJob={handleDeleteJob} />
    })
    
    return (
        <div>
            {jobList}
        </div>
    );

}

export default JobList;
import React, {useState, useEffect} from "react";

function JobForm() {
    const [name, setName] = useState("")
    const [type, setType] = useState("upper")

    function handleSubmit (event) {
        event.preventDefault();
    
      }

    return (
        <div className="job-form">
            <form onSubmit={handleSubmit}>
            <h2>New Job Form</h2>
                <input id="input" type="text" placeholder="Enter job name..." onChange={(e) => setName(e.target.value)} value={name} ></input>
                <select id="type-select" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="upper">upper</option>
                    <option value="lower">lower</option>
                    <option value="full">full</option>
                </select>
                <button id="btn" >Submit new job</button>
            </form>
        </div>
        
    )
}

export default JobForm;
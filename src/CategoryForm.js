import React, {useState} from "react";

function CategoryForm () {
    const [category, setCategory] = useState("")

    function handleSubmit (event) {
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
        <form onSubmit={handleSubmit}>
            <h5>Add new category?</h5>
            <input id="input" type="text" placeholder="Enter category name..." onChange={(e) => setCategory(e.target.value)} value={category} ></input>
            <button></button>
        </form>
    )

}

export default CategoryForm;
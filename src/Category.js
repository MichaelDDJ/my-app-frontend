import React, {useState} from "react";
import JobList from "./JobList";

function Category ({categories, setCategories, handleDeleteCategory, handleDeleteJob }) {
    const [title, setTitle] = useState("")
    const [cat_id, setCat_id] = useState("")

    
    

    const categoryList = categories.map((categ) => {

        function something () {
            fetch(`http://localhost:3001/categories/${categ.id}`, {
                method: "DELETE"
            })
            handleDeleteCategory(categ.id)
        }

        function handleSubmit (e) {
            e.preventDefault();
            fetch(`http://localhost:3001/categories/${categ.id}`, {
              method: "PATCH",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                title: title,
              })
            })
            .then((r) => r.json())
            .then((data) => setCategories(categories.map((category) => {
                if (category.id === data.id) {
                    return data;
                } else {
                    return category;
                }
            })))
        }

        return <div className="CatBox" key={categ.title}>
            <h2>{categ.title}</h2>
            <JobList key={categ.id} categ={categ} categories={categories} setCategories={setCategories} handleDeleteJob={handleDeleteJob} />
            <form onSubmit={handleSubmit} className="Cat-Form">
                <input id="input" type="text" placeholder="Enter new Category name..." onChange={(e) => setTitle(e.target.value)} value={title} ></input>
                <button id="btn" >Change Category Name</button>
            </form>
            <button onClick={something} >Delete Category</button>
        </div>
    })

    

    return (
        <div className="Category-Container">
            {categoryList}
        </div>
    );


}

export default Category;
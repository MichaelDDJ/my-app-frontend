import React from "react";
import JobList from "./JobList";

function Category ({categories, setCategories, handleDeleteCategory, handleDeleteJob }) {

    

    const categoryList = categories.map((categ) => {

        function something () {
            fetch(`http://localhost:3001/Categories/${categ.id}`, {
                method: "DELETE"
            })
            handleDeleteCategory(categ.id)
        }

        return <div className="CatBox" key={categ.title}>
            <h2>{categ.title}</h2>
            <JobList key={categ.id} categ={categ} categories={categories} setCategories={setCategories} handleDeleteJob={handleDeleteJob} />
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
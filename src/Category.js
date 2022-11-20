import React from "react";
import JobList from "./JobList";

function Category ({categories}) {
    

    const categoryList = categories.map((categ) => {
        return <div className="CatBox" key={categ.title}>
            <p>{categ.title}</p>
            <JobList categ={categ} />
        </div>
    })

    

    return (
        <div className="Category-Container">
            {categoryList}
        </div>
    );


}

export default Category;
import React, {useState, useEffect} from "react";
import JobList from "./JobList";

function Category () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/Categories")
        .then((r) => r.json())
        .then(data => setCategories(data))
    }, [])
    console.log(categories)

    const categoryList = categories.map((categ) => {
        return <div className="CatBox" key={categ.title}>
            <p>{categ.title}</p>
            <JobList categ={categ}/>
        </div>
    })

    

    return (
        <div className="Category-Container">
            {categoryList}
        </div>
    );


}

export default Category;
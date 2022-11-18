import React, {useState, useEffect} from "react";
import Job from "./Job";

function Category () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/Categories")
        .then((r) => r.json())
        .then(data => setCategories(data))
    }, [])
    console.log(categories)

    const categoryList = categories.map((cat) => {
        return <div className="CatBox" key={cat.title}>
            <p>{cat.title}</p>
            <Job categ={cat.title}/>
        </div>
    })

    return (
        <div className="Category-Container">
            {categoryList}
        </div>
    );


}

export default Category;
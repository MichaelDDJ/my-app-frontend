import React from "react";
import Job from "./Job";

function Home() {

    //Divs displaying job categories
    //import job components
    return (
        <div className="Category-Container">
            <div className="CatBox">
                <p>Something</p>
                <Job />               
            </div>
            <div className="CatBox">
            <p>Something</p>               
            </div>
            <div className="CatBox">
            <p>Something</p>               
            </div>
            <div className="CatBox">
            <p>Something</p>               
            </div>
        </div>
    )
}

export default Home;
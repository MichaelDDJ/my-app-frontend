import React from "react";
import {NavLink} from 'react-router-dom'

function NavBar () {
    return (
        <div>
            <NavLink to="/" className={"navlink"} >Categories</NavLink>
            <NavLink to="/Form" className={"navlink"} >Form</NavLink>
        </div>
    )

}

export default NavBar;
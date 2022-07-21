import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{

    return(
    <nav>
        <Link to="/">Home</Link>
        <Link to="/route1">Route1</Link>
        <Link to="/route2">Route2</Link>
    
    </nav>
    )
}


export default NavBar;
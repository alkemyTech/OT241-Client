import React from "react";

import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "../../src/components/NavBar";



const RoutesNav =()=>{

    return(
        <>
        <BrowserRouter>
       <NavBar/>
        <Routes>
            <Route path="/"element={<h2>Home</h2>}/>
            <Route path="/route1"element={<h2>Route 1</h2>}/>
            <Route path="/route2"element={<h2>Route 2</h2>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RoutesNav;

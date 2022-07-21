import React from "react";

import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "../../src/components/NavBar";
import RegisterForm from "./RegisterForm";
import Login from './Login'


import Home from '../pages/Home'


const RoutesNav=()=>{

    return(
        <>
            <Routes>
                <Route path="/"element={<Home/>}/>
                <Route path="/registro"element={<RegisterForm/>}/>
                <Route path="/ingreso" element={<Login/>}/>
            </Routes>
        </>
    )
}

export default RoutesNav;

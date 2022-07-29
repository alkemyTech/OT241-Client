import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/LOGO-SOMOS MAS.png';

import {useLocation, Link } from 'react-router-dom'


const NAV_LINKS = [
    {
      name: 'Inicio',
      path: '/',
    },
    {
      name: 'Nosotros',
      path: '/nosotros',
    },
    {
      name: 'Novedades',
      path: '/news',
    },
    {
      name: 'Testimonios',
      path: '/testimonios',
    },
    {
      name: 'Contacto',
      path: '/contacto',
    },
    {
      name: 'Contribuye',
      path: '/contribuye',
    },
  ]
const Footer = ()=> {
    const { pathname } = useLocation()

    const getLinkClassName = path =>
      path === pathname
        ? 'text-decoration-none text-body fw-bold'
        : 'text-decoration-none text-body'
  


    return(
        <footer style={{
            height: "559px",
            backgroundColor: "#C0C0C0"
        }} className='container-fluid'>
            <section className="d-flex flex-column w-100 h-75 align-items-center justify-content-evenly">
                <div className="w-100 row bd-highlight align-items-center">
                    <span style={{
                            height: "2px",
                            backgroundColor: "#000000"
                        }} 
                        className="col-5 w-30">
                    </span>
                    <img 
                        className="col-2 w-30"
                        src={Logo} alt="Logo"    
                    />
                    <span style={{
                            height: "2px",
                            backgroundColor: "#000000"
                        }} 
                        className="col-5 w-30">
                    </span>
                </div>
                <div className=" p-2 bd-highlight w-75">
                    <ul className="list-unstyled d-flex flex-row justify-content-between">
                    {NAV_LINKS.map(({ name, path }) => (
                        <li key={name}>
                        <Link className={getLinkClassName(path)} to={path}>
                            {name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="w-100 row bd-highlight align-items-center">
                    <span style={{
                            height: "2px",
                            backgroundColor: "#000000"
                        }} 
                        className="col-12">
                    </span>
                </div>
                <div className="w-100 p-2 bd-highlight">
                    <ul className="w-50 list-unstyled mx-auto d-flex flex-row justify-content-between">
                        <li className='text-center p-2 rounded-circle bg-dark text-white display-6' style={{  
                            width:"50px",
                            height:"50px",
                        // backgroundColor:"#000",

                    }
                    }>x</li>
                        <li className='text-center p-2 rounded-circle bg-dark text-white display-6' style={{  
                            width:"50px",
                            height:"50px",
                        // backgroundColor:"#000",

                    }
                    }>x</li>
                        <li className='text-center p-2 rounded-circle bg-dark text-white display-6' style={{  
                            width:"50px",
                            height:"50px",
                        // backgroundColor:"#000",

                    }
                    }>x</li>
                        <li className='text-center p-2 rounded-circle bg-dark text-white display-6' style={{  
                            width:"50px",
                            height:"50px",
                        // backgroundColor:"#000",

                    }
                    }>x</li>
                    </ul>
                </div>
                <div className=" p-2 bd-highlight">
                    <p className='text-center'>2022 by Alkemy. All Rights Reserved.</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
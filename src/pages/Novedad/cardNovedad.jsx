import React from 'react';

import { Link } from 'react-router-dom'

import image1 from "../../images/Novedad1.png";

const CardNovedad = (props)=>{
    console.log(props)
    let {name, id} = props;
    
    console.log(name)
    return(
        <div className="card shadow mt-5 col-4" 
            style={{width: "12rem"}}
        >
            <img src={image1} className="card-img-top" alt="Description of news"/>
            <div className="card-body">
                <h6 className="card-title">{name}</h6>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <Link to={`/news/${id}`} className="shadow btn btn-primary">Ver Novedad</Link>
            </div>
        </div>
        )
}


export default CardNovedad;
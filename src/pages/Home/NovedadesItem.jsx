import React from "react";
import image1 from "../../images/Novedad1.png";

import { Link } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NovedadesItem({ imgUrl, description,i, index }) {

  console.log(i);
  console.log(imgUrl);
  return (
    <div className="col-6 col-sm-6 col-xl-6" key={i+1}>
      <div className="card m-2 p-2" style={{
        backgroundColor:'#7E9AFD'
      }}>
        <div className="row g-0 d-flex align-items-center">
          <div className="col-md-6 bg-contain">
            <img src={image1} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <p className="card-text" style={{
                fontSize: '12px'
              }}>{description}</p>
              {/* <button style={{
                fontSize: '12px'
              }} > */}
                <Link className="btn btn-primary mx-auto" to={`news/${i+1}`}>Ver Novedad</Link>
                {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NovedadesItem;

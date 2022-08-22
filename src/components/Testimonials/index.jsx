import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import httpService from "../../services/httpService";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from 'axios'

const service = new httpService();

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    service.get("/testimonials").then((res) => {
      setTestimonials(res);
    });
  }, []);

  return (
    <div className="module--testimonials">
      <h2 className="text-center fw-semibold" style={{ margin: "4.8rem 0 1.6rem 0" }}>
        Testimonios
      </h2>
      <div
        className="d-flex flex-wrap w-100 justify-content-center align-content-start"
        style={{ marginBottom: "4rem" }}
      >
        {testimonials &&
          testimonials.map((testimonial) => {
            return (
              <div className="module--testimonial">
                <div
                  key={uuidv4()}
                  className="rounded-4 m-2 p-3"
                  style={{
                    backgroundColor: "#FAFA88",
                    height: "300px",
                  }}
                >
                  <div
                    className="card-img-top rounded-circle"
                    style={{
                      width: "90px",
                      height: "90px",
                      backgroundImage: `url(${testimonial.imageUrl})`,
                      overflow: "hidden",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "auto 100%",
                      backgroundPosition: "center center",
                    }}
                  ></div>
                  <div className="mt-3">
                    <h5 className="fw-semibold">{testimonial.name}</h5>
                    <p className="">{testimonial.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="module--btnInicio button px-5 py-2 fs-5 rounded-3 border border-1 border-dark">
            Ir a Inicio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;

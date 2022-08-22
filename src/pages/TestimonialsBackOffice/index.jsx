import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ConfirmAlert } from "../../components/Alerts";
import axios from 'axios'

const service = new httpService();

const TestimonialsBackOffice = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [props, setProps] = useState();
  const [errors, setErrors] = useState(null);
  const [reloadData, setReloadData] = useState(false);

  // Get all testimonials
  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          // TODO: Descomentar esta línea una vez este listo el endpoint de la api:
          let testimonials = await axios.get("http://localhost:3000/testimonials");
          setProps([...testimonials.data]);
          if (testimonials.length === 0) {
            setErrors({ msg: "No testimonials finded" });
          } else {
            setErrors(null);
          }
          setIsLoading(false);
        } catch (err) {
          setErrors({ msg: "Endpoint not finded" });
          setIsLoading(false);
        }
      }
    }
    fetchData();
    return () => (mounted = false);
    //eslint-disable-next-line
  }, [reloadData]);

  // Delete testimonial
  const handleDeleteTestimonial = async (value) => {
    const id = value;

    ConfirmAlert({
      text: "Esta por eliminar el testimonio, ¿desea continuar?",
      onConfirm: async () => {
        setIsLoading(true);
        await service.delete("testimonials", id);
        setTimeout(() => {
          setReloadData(!reloadData);
          setIsLoading(false);
        }, 1000);
      },
    });
  };

  return (
    <>
      <div className="container-fluid mb-5 w-100">
        <p className="text-center h1">Lista de testimonios</p>
        {isLoading ? (
          <Loader />
        ) : errors?.msg ? (
          <ErrorMessage>Ops! Parece que en este momento no hay testimonios.</ErrorMessage>
        ) : (
          <div
            className="w-100 mx-auto d-flex flex-column align-items-center p-3 rounded"
            style={{
              maxWidth: "1200px",
              minHeight: "50vh",
            }}
          >
            <table
              className="table fs-5"
              style={{
                maxWidth: "960px",
              }}
            >
              <thead>
                <tr>
                  <th scope="col" className="p-3">
                    Id
                  </th>
                  <th scope="col" className="p-3">
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="p-3 text-end"
                    style={{
                      width: "150px",
                      maxWidth: "120px",
                    }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody
                className="w-100"
                style={{
                  maxWidth: "960px",
                }}
              >
                {props &&
                  props.map((testimonial) => {
                    return (
                      <tr key={testimonial.id}>
                        <th scope="row" className="ps-3">
                          {testimonial.id}
                        </th>
                        <td className="ps-3">{testimonial.name}</td>
                        <td
                          className="text-end d-flex justify-content-between ps-3"
                          style={{
                            maxWidth: "120px",
                          }}
                        >
                          <Link className="btn btn-info text-white" to={`edit/${testimonial.id}`}>
                            <FiEdit />
                          </Link>
                          <button
                            className="btn btn-danger"
                            style={{ zIndex: "10" }}
                            value={testimonial.id}
                            onClick={(e) => handleDeleteTestimonial(testimonial.id)}
                          >
                            <FiTrash2 />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default TestimonialsBackOffice;

import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { ConfirmAlert } from "../../components/Alerts";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios  from "axios";
const service = new httpService();

const CategoriesBackOffice = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [props, setProps] = useState();
  const [errors, setErrors] = useState(null);
  const [reloadData, setReloadData] = useState(false);
  
  // Get all news
  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          let categories = await axios.get("http://localhost:3000/categories");
      
          setProps([...categories.data]);
          if (categories.length === 0 || !categories) {
            setErrors({ msg: "No categories finded" });
          } else {
            setErrors(null);
          }
          setTimeout(() => setIsLoading(false), 600);
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

  // Delete category
  const handleDeleteCategory = async (value) => {
    const id = value;
    ConfirmAlert({
      text: "Atención! Esta por eliminar la categoría ¿desea continuar?",
      onConfirm: async () => {
        setIsLoading(true);
        await service.delete("categories", id);
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
        <p className="text-center h1">Listado de categorías</p>
        {isLoading ? (
          <Loader />
        ) : errors?.msg ? (
          <ErrorMessage>Ops! Parece que en este momento no hay categorías.</ErrorMessage>
        ) : (
          <div
            className="w-100 mx-auto d-flex flex-column align-items-center p-3 rounded"
            style={{
              maxWidth: "1200px",
              minHeight: "50vh",
              backgroundColor: "#242424",
            }}
          >
            <table
              className="table fs-5"
              style={{
                maxWidth: "960px",
              }}
            >
              <thead>
                <tr className="text-white">
                  <th scope="col" className="p-3 pe-0">
                    <div className="border-end border-secondary">Nombre</div>
                  </th>
                  <th scope="col" className="text-end p-3 ps-0">
                    Acciones
                  </th>
                </tr>
              </thead>
            </table>
            <div
              className="w-100"
              style={{
                maxWidth: "960px",
              }}
            >
              {props &&
                props.map((category) => {
                  return (
                    <div
                      key={uuidv4()}
                      className="d-flex justify-content-between p-2 px-3 mb-3 border border-red rounded bg-light shadow-sm"
                    >
                      <span
                        className="align-self-center fw-semibold"
                        style={{ fontSize: "1.2rem" }}
                      >
                        {category.name}
                      </span>
                      <span className="d-flex justify-content-around" style={{ width: "100px" }}>
                        <Link
                          className="btn btn-info text-white"
                          style={{ zIndex: "10" }}
                          to={`edit/${category.id}`}
                        >
                          <FiEdit />
                        </Link>
                        <button
                          className="btn btn-danger"
                          style={{ zIndex: "10" }}
                          value={category.name}
                          onClick={(e) => handleDeleteCategory(category.id)}
                        >
                          <FiTrash2 />
                        </button>
                      </span>
                    </div>
                  );
                })}
            </div>
            <Link className="btn btn-info mb-2 mb-sm-0" to={`edit`}>
              <FiEdit /> Nueva categoría
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoriesBackOffice;

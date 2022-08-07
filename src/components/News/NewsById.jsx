import React,{useState, useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css";

const NewsById = () => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const { id } = useParams();
  const service = new httpService();
  // const [props, setProps] = useState();

  // useEffect(()=>{
  //   axios.get(`http://localhost:3000/news/${id}`)
  //   .then(res => {
  //       setData(res.data.news)
  //   })
  // },[])
  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      if (mounted) {
        try {
          let news = await service.get("news", id);
          // setProps({ ...news.news });
          setData({ ...news.news });
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
  }, []);
  
  return (
    <div className="w-100">
      {isLoading ? (
        <Loader />
      ) : errors?.msg ? (
        <ErrorMessage>Ops! Parece que esta noticia ya no es accesible.</ErrorMessage>
      ) : (
        <div className='container p-6 d-flex flex-column mb-3 justify-content-center align-items-center'>
            <h1>{data.name}</h1>
            <p><small>{Date(data.createdAt)}</small></p>
            <img src={data.image} alt="" />
            <p>{data.content}</p>
            <Link to="/news">Volver</Link>
        </div>
      )}
    </div>
  )
}

export default NewsById
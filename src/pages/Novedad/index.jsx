import React,{ useEffect, useState } from 'react';
import Footer from '../../components/Footer'
import Header from '../../components/Header.jsx'
import CardNovedad from './cardNovedad';
import httpService from "../../services/httpService";
import Loader from "../../components/Loader";
import ErrorMessage from "./ErrorMessage";


import { novedades } from "./mockdataNovedad.js";

const Novedades = ()=>{
    const novedadesMock = novedades;
    const [isLoading, setIsLoading] = useState(true);
    const service = new httpService();
    const [props, setProps] = useState();
    const [errors, setErrors] = useState(null);

    console.log(novedadesMock);
    // Get all news
    useEffect(() => {
        let mounted = true;
        async function fetchData() {
          if (mounted) {
            try {
              let news = await service.get("api/v1/news", "");
              setProps({ ...news.news });
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
        <>
            <Header/>
                <div className="container mb-5 w-100">
                    <p className="text-center h1">Novedades</p>

                    <div className="mx-auto d-flex flex-wrap justify-content-between row w-100">
                    {isLoading ? (
                        <Loader />
                        ) : !errors?.msg ? (
                        <ErrorMessage>Ops! Parece que en este momento no hay novedades.</ErrorMessage>
                        ) : (
                        novedadesMock.map((novedad, i)=>{
                            let props = { ...novedad, i };
                            return <CardNovedad key={i} {...props}/>   
                        })
                        )}

                    </div>
                </div>
            <Footer/>
            {/* <Novedad {...props} /> */}
        </>
        )
}


export default Novedades;
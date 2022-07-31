import React from "react";
import { Routes, Route } from "react-router-dom";
import ActividadesBackOffice from "../pages/ActividadBackOffice";
import Home from "../pages/Home/index.jsx";
import NovedadWrapper from "../pages/NovedadId/Wrapper";
import NovedadesBackOffice from "../pages/NovedadBackOffice";
import OrganizacionBackoffice from "../pages/OrganizacionBackOffice";
import Backoffice from "./Backoffice";
import Login from '../pages/Login';

const RoutesNav = () => {
  return (
    <div className="min-vh-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novedad/:id" element={<NovedadWrapper />} />
        <Route path="/backoffice" element={<Backoffice />} />
        <Route path="/backoffice/edit-organization" element={<OrganizacionBackoffice />} />
        <Route path="/backoffice/news" element={<NovedadesBackOffice />} />
        <Route path="/backoffice/activities" element={<ActividadesBackOffice />} />
        <Route path="nosotros" element={<h2>NOSOTROS</h2>} />
        {/* <Route path="novedades" element={<Novedades />} /> */}
        <Route path="testimonios" element={<h2>TESTIMONIOS</h2>} />
        {/* <Route path="contacto" element={<Contacto />} /> */}
        <Route path="contribuye" element={<h2>CONTRIBUYE</h2>} />
        <Route path="ingreso" element={<Login />} />
        <Route path="registro" element={<h2>REGISTRO</h2>} />
        <Route path="*" element={<h2>Esta pagina aun no fue creada</h2>} />
      </Routes>
    </div>
  );
};

export default RoutesNav;

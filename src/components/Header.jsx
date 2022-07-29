import React from 'react'
import { useLocation, Link } from 'react-router-dom'

// TODO: Cargar dinamicamente el logo
import logo from '../images/logo.png'

// TODO: Cargar dinámicamente los links de navegación
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

function Header() {
  const { pathname } = useLocation()

  const getLinkClassName = path =>
    path === pathname
      ? 'text-decoration-none text-body fw-bold'
      : 'text-decoration-none text-body'

  return (
    <nav className="d-flex align-items-center justify-content-between container-fluid py-2 shadow mb-5">
      <Link to="/">
        <img src={logo} alt="ONG" />
      </Link>

      <div className="d-flex align-items-center gap-3">
        <ul className="d-flex list-unstyled m-0 gap-4">
          {NAV_LINKS.map(({ name, path }) => (
            <li key={name}>
              <Link className={getLinkClassName(path)} to={path}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="d-flex gap-2">
          <Link
            className="d-block text-decoration-none btn btn-outline-dark rounded-pill px-3"
            to="/ingreso"
          >
            Log in
          </Link>
          <Link
            className="d-block text-decoration-none btn btn-danger text-white rounded-pill px-3"
            to="/registro"
          >
            Regístrate
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header

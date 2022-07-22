import React from 'react'
import { Link } from 'react-router-dom'

const MenuButton = (props) => {
  return (
    <div className='container-lg col m-2 px-0 py-2 shadow-sm bg-white rounded'>
      <h2 className='h6 text-center' style={{color: '#76b8fa'}}>{props.title}</h2>
      <div className='col text-center mb-3' style={{fontSize: '3em'}}>{props.icon}</div>
      <div className='mx-auto d-flex justify-content-center'>
        <Link className='btn btn-primary' to={props.to}>Ir</Link>
      </div>
    </div>
  )
}

export default MenuButton
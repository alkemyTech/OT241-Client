import React from 'react'
import MenuButton from "./MenuCard.jsx";
import { FaRegNewspaper, FaClipboardList, FaList, FaUserAlt } from 'react-icons/fa'
import { BsFillChatFill, BsFillFileEarmarkSlidesFill } from 'react-icons/bs'
import { RiOrganizationChart } from 'react-icons/ri'
import { IoIosPeople } from 'react-icons/io'

const Backoffice = () => {
  return (
    <div className='container-fluid p-5' style={{backgroundColor: '#edf2f7'}}>
      <div className='row'>
        <MenuButton title='Novedades' icon={<FaRegNewspaper />} to='Novedades'/>
        <MenuButton title='Actividades' icon={<FaClipboardList />} to='Actividades'/>
        <MenuButton title='Categorias' icon={<FaList />} to='Categorias'/>
        <MenuButton title='Testimonios' icon={<BsFillChatFill />} to='Testimonios'/>
      </div>
      <div className='row'>
        <MenuButton title='Organizacion' icon={<RiOrganizationChart />} to='Organizacion'/>
        <MenuButton title='Slides' icon={<BsFillFileEarmarkSlidesFill />} to='Slides'/>
        <MenuButton title='Usuarios' icon={<FaUserAlt />} to='Usuarios'/>
        <MenuButton title='Miembros' icon={<IoIosPeople />} to='Miembros'/>
      </div>
    </div>
  )
}

export default Backoffice
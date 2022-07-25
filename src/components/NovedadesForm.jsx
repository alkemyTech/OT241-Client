import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'

const NovedadesForm = (props) => {
    
    //constantes (sólo comentar props en el caso de enviar el objeto con la información)
    props = {
        id: 1,
        content: "Hola, a través de PROPS debe enviarse el contenido de la Novedad a este componente",
        title: "Noticia 1",
        category: "2",
    }
    let contenido
    
    //States
    const [title, setTitle] = React.useState(props.title)
    const [category, setCategory] =  React.useState(props.category)

    const [title2, setTitle2] = React.useState("")
    const [category2, setCategory2] =  React.useState("")
    
    //editar novedades
    const editNews = async(ev) => {
        ev.preventDefault()
        
        try {
            const titulo = document.getElementById("titulo").value
            const categoria = document.getElementById("categoria").value
            const imagen = document.getElementById("imagen").value
            const id = document.getElementById("id").value
            const form = document.getElementById("formulario")
            await axios.patch(`news/${props.id}`,{
                id: id,
                name: titulo,
                content: contenido,
                image: imagen,
                category: categoria,
                updatedAt: Date.now()
            })
            form.reset()
        } catch (e) {
            console.log(e)
        }

    }
    //Crear novedades
    const createNews = async(ev) => {
        ev.preventDefault()

        try {
            const titulo = document.getElementById("titulo").value
            const categoria = document.getElementById("categoria").value
            const imagen = document.getElementById("imagen").value
            const form = document.getElementById("formulario")
            await axios.post('news',{
                name: titulo,
                content: contenido,
                image: imagen,
                category:categoria,
                createdAt: Date.now()
            })
            form.reset()
        } catch (e) {
            console.log(e)
        }
    }
    
  return (
    <div>
        {
            !props.title ? (
                <div className='container'>
                    <h1 className='text-center'>Crear Novedad</h1>
                    <div className='container d-flex justify-content-center'>
                        <form id='formulario' onSubmit={createNews}>
                            <input type="hidden" defaultValue={props.id} id="id" />
                            <label className='label-form'> Titulo</label>
                            <input type="text" className="mb-2 form-control" value={title2} onChange={e => setTitle2(e.target.value)} placeholder='Titulo' id='titulo'/>

                            <label className="label-form">Categoria</label>
                            <select className="form-select" id="categoria" value={category2} onChange={e => setCategory2(e.target.value)}>
                                <option defaultValue>Elige una categoría</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label className="form-label mt-2">Selecciona una imagen</label>
                            <input type="file" className="form-control" id="imagen" />

                        <label className='label-form mt-2'>Contenido</label>
                        <CKEditor   
                                    
                                    editor={ ClassicEditor }
                                    data={props.content}
                                    onChange={(event, editor) => {
                                        contenido = editor.getData(); 
                                    }}
                                />
                                <button type='submit' className="btn btn-danger mt-2">Crear Novedad</button>
                        </form>
                    </div>
                </div>
                

            ): (
                <div className='container'>
                    <h1 className='text-center'>Editar Novedad</h1>
                    <div className='container d-flex justify-content-center'>
                    <form id='formulario' onSubmit={editNews}>
                        <input type="hidden" defaultValue={props.id} id="id" />
                        <label className='label-form'> Titulo</label>
                        <input type="text" className="mb-2 form-control" value={title} onChange={e => setTitle(e.target.value)} placeholder='Titulo' id='titulo'/>

                        <label className="label-form">Categoria</label>
                        <select className="form-select" id="categoria" value={category} onChange={e => setCategory(e.target.value)}>
                            <option defaultValue>Elige una categoría</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label className="form-label mt-2">Selecciona una imagen</label>
                        <input type="file" className="form-control" id="imagen" />

                    <label className='label-form mt-2'>Contenido</label>
                    <CKEditor   
                                
                                editor={ ClassicEditor }
                                data={props.content}
                                onChange={(event, editor) => {
                                    contenido = editor.getData(); 
                                } }
                            />
                            <button type='submit' className="btn btn-warning mt-2">Editar Novedad</button>
                    </form>
                    </div>
                </div>
            )

        }
    </div>
  )
}

export default NovedadesForm
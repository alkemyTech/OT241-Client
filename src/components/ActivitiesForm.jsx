import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

const http = helpHttp()

const ActivitiesForm = (props) => {

  const [sendForm,setSendForm] = useState(false)
  const [error, setError] = useState(null)

  return (
    <>
      <div className='d-flex flex-column ms-20 text-center'>
        <h1>Añadir Actividad</h1>
      </div>
      <Formik
      initialValues={
        {
          name: props.activity ? props.activity.name : '',
          content: props.activity ? props.activity.content : ''
        }
      }

      validate={(values)=>{
        const {name, content} = values
        const myErrors = {}

        //Validate a name:
        if(!name){
          myErrors.nombre = "Please insert a name"
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name)){
          myErrors.nombre = "The name can only contain letters and spaces"
        }

        //Validate a lastName:
        if(!content){
          myErrors.contenido = "Please insert content"
        }
        return myErrors
      }}

      onSubmit={(values, {resetForm})=>{
        resetForm()
        if(props.activity) {
          //REQUEST PARA EDITAR LA ACTIVIDAD
          http.put('<endpoint activities>', ({body: {...values}}))
        } else {
          //REQUEST PARA CREAR LA ACTIVIDAD
          http.post('<endpoint activities>', {body: values})
        }
      }}
      >

        { ( {errors,touched} ) =>(
          <Form className='d-lg-flex flex-lg-column justify-content-lg-left align-items-lg-start w-50 fw-bold mb-5 mx-auto'>
            <div className="mb-3 w-50">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <Field
                type="text"
                className="form-control"
                id="nombre"
                name='name'
              />
              {touched.name && errors.name && <div className='alert alert-danger' role='alert'>{errors.name}</div>}
            </div>
            <div className="mb-3 w-100">
              <label htmlFor="contenido" className="form-label">
                Contenido
              </label>
              <Field as='textarea'
                type="textarea"
                className="form-control"
                id="contenido"
                name='content'
              />
              {touched.content && errors.content && <div className='alert alert-danger' role='alert'>{errors.content}</div>}
            </div>
            <button type="submit" className="btn btn-primary w-50 fw-bold" style={{backgroundColor: '#FF0000'}}>
              Create
            </button>
            {error ? <div>Error unsuccess</div> : sendForm && <div className='alert alert-success' role='alert'>Register Success</div> }
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ActivitiesForm
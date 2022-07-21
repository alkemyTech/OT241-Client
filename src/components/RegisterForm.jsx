import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Formik, Form, Field , ErrorMessage } from 'formik';
import httpService from '../services/httpService.js'

import {useNavigate} from 'react-router-dom'

let http = new httpService()


const RegisterForm = () => {
  let [sendForm,setSendForm] = useState(false)
  let [error, setError] = useState(null)


  const navigate = useNavigate()
  return (
    <>
      <div className='d-flex flex-column ms-20 text-center'>
        <h1>Create user</h1>
        <img src='/images/Group33.png' alt="" />
      </div>
      <Formik 
      initialValues={
        {
          firstName: '',
          lastName: '',
          email:'',
          password:''
        }
      }

      validate={(values)=>{
        let {firstName, lastName, email , password} = values

        let myErrors = {}

        //Validate a name:
        if(!firstName){
          myErrors.firstName = "Please insert a name"
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(firstName)){
          myErrors.firstName = "The name can only contain letters and spaces"
        }

        //Validate a lastName:
        if(!lastName){
          myErrors.lastName = "Please insert a Last name"
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(lastName)){
          myErrors.lastName = "The Last Name can only contain letters and spaces"
        }

        //Validate email:
        if(!email){
          myErrors.email = "Please insert a email"
        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)){
          myErrors.email = "The email can only contain letters numbers dots"
        }

        //validate a password:
        if(!password){
          myErrors.password = "Please insert a password"
        }else if(password.length < 6){
          myErrors.password = "Password must have at least 6 characters."
        }

        return myErrors
      }}

      onSubmit={(values, {resetForm})=>{
        
        resetForm()
        //Aqui va la peticion fetch para crear el usuario en la base de datos EJ:
        
        /*
        fetch('/users/auth/register', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }).then(res => {
          if(!res.ok) setError('Ocurrio un error')
          return res.json()
        }).then(json => {
          console.log(json)
        })
        */
        
        
        
        http.post('users/auth/register',values).then(res => 
          {
            if(res.errors){
              setError(res.errors)
            }

          })
      
        setSendForm(true)
        setTimeout(()=>{
            if(!error){
              setSendForm(false)
              setError(false)
              navigate('/ingreso')
            }
          },2000)
      }}>

        { ( {errors,touched} ) =>(
          <Form className='d-lg-flex flex-lg-column justify-content-lg-center align-items-lg-center w-100 fw-bold'>
            <div className="mb-3 w-50">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <Field
                type="text"
                className="form-control"
                id="firstName"
                name='firstName'
              />
              {touched.firstName && errors.firstName && <div className='alert alert-danger' role='alert'>{errors.firstName}</div>}
            </div>
            <div className="mb-3 w-50">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <Field
                type="text"
                className="form-control"
                id="lastName"
                name='lastName'
              />
              {touched.lastName && errors.lastName && <div className='alert alert-danger' role='alert'>{errors.lastName}</div>}
            </div>
            <div className="mb-3 w-50">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <Field
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name='email'
              />
             <ErrorMessage name='email' component={()=>{
                return (<div className='alert alert-danger' role='alert'>{errors.email}</div>)
              }}/>
              {error && <div className='alert alert-danger' role='alert'>{error}</div>}
            </div>
            <div className="mb-3 w-50">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <Field
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name='password'
              />
              <ErrorMessage name='password' component={()=>{
                return (<div className='alert alert-danger' role='alert'>{errors.password}</div>)
              }}/>
            </div>
            <button type="submit" className="btn btn-primary w-50 fw-bold" style={{backgroundColor: '#FF0000'}}>
              Create
            </button>
            {error ? <div>Register unsuccess</div> : sendForm && <div className='alert alert-success' role='alert'>Register Success</div> }
          </Form>
        )}
      </Formik>
     
    </>
      
  );
}

export default RegisterForm
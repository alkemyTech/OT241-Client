import React,{useState} from 'react'
import { useFormik } from 'formik';
import img2 from '../images/loginimg.jpg'
import * as yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'

import httpService from '../services/httpService'

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);

  let http = new httpService()

  const validationSchema = yup.object({
    email: yup.string().email("Formato Incorrecto").required("Campo requerido"),
    password: yup.string().min(6, "Necesita al menos 6 caracteres").required("Campo requerido")
  })


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema : validationSchema,
    onSubmit: (values) => {
      const data = {...values}
      console.log(data)

      http.post('users/auth/login',data).then(res => {
        if(res.text) return alert(res.text)

        console.log(res)

        localStorage.setItem('token',res.token)
        setUser({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          image: res.data.image,
          role: res.data.roleId
        })
        navigate('/')
      })
    },
  });

  return (
    <div className="d-flex justify-content-center">
      <div className="row align-items-center m-0">
        <div className='col-12 col-md-6 d-flex justify-content-center' style={{height: "100vh", alignItems: "center"}}>
              <form className='d-flex flex-column' onSubmit={formik.handleSubmit}>
                        <p className='m-0'>Bienvenido</p>
                        <h2>
                          Inicia sesión en tu cuenta!
                        </h2>
                        <input
                          className='form-control mx-auto'
                          id="email"
                          name="email"
                          type="email"
                          placeholder='Email'
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          
                        />
                        {
                            formik.errors.email ? (
                              <div className="text-danger">{formik.errors.email}</div>
                            ) : null
                        }

                    <input
                      className='form-control mx-auto mt-2'
                      id="password"
                      name="password"
                      type="password"
                      placeholder='Contraseña'
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    {
                          formik.errors.password ? (
                            <div className="text-danger">{formik.errors.password}</div>
                          ) : null
                        }
                      <div className="d-grid gap-2">
                      <button type="submit" className='btn btn-danger mt-2 rounded'>Inicia Sesión</button>

                      </div>
            <p className="mt-2 text-center">No tienes una cuenta? <strong><a className='text-danger text-decoration-none' href="/">Registrate</a></strong></p>
            </form>


        </div>
        <div className="d-none d-md-block col-md-6 p-0">
          <img src={img2} className='' style={{maxWidth: "100%", height: "100vh", objectFit:"cover"}} />
        </div>

      </div>

    </div>
  )
}

export default Login
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ConfirmAlert } from '../../components/Alerts'

const userProfileSchema = yup.object({
  firstName: yup.string().required('Campo requerido'),
  lastName: yup.string().required('Campo requerido'),
  email: yup.string().email('Formato Incorrecto').required('Campo requerido'),
})

function Profile() {
  const [isEditing, setIsEditing] = useState(false)

  // TODO: Agregar dentro de un useEffect la petición a la API para que traiga los datos del usuario cuando se cargue el componente y setearlos en initialValues
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: userProfileSchema,
    onSubmit: values => {
      const data = { ...values }
      console.log(data)
      console.log('Formulario validado y listo para enviar')
      // TODO: Agregar petición a API para actualizar datos acá
    },
  })

  return (
    <div className="container-fluid mb-5">
      <h1 className="mb-4 text-center">Mi perfil</h1>

      <form
        className="card col-12 col-md-6 col-lg-4 mx-auto shadow"
        onSubmit={formik.handleSubmit}
      >
        <div className="card-body">
          <div className="d-flex justify-content-between mb-4">
            <button
              onClick={() => {
                formik.isValid && setIsEditing(!isEditing)
              }}
              type={isEditing ? 'button' : 'submit'}
              className="btn btn-primary"
            >
              {isEditing ? 'Guardar' : 'Editar perfil'}
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={() =>
                ConfirmAlert({
                  text: 'Estás seguro de que quieres eliminar tu cuenta?',
                  // TODO: Agregar petición a API para eliminar cuenta acá
                  onConfirm: () =>
                    console.log('Enviar petición a API para eliminar cuenta'),
                })
              }
            >
              Eliminar cuenta
            </button>
          </div>

          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Nombre
            </label>
            <input
              className={
                formik.errors.firstName
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
              type="text"
              name="firstName"
              id="firstName"
              disabled={!isEditing}
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />

            {formik.errors.firstName && (
              <span className="invalid-feedback">
                {formik.errors.firstName}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Apellido
            </label>
            <input
              className={
                formik.errors.lastName
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
              type="text"
              name="lastName"
              id="lastName"
              disabled={!isEditing}
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />

            {formik.errors.lastName && (
              <span className="invalid-feedback">{formik.errors.lastName}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className={
                formik.errors.email ? 'form-control is-invalid' : 'form-control'
              }
              type="email"
              name="email"
              id="email"
              disabled={!isEditing}
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            {formik.errors.email && (
              <span className="invalid-feedback">{formik.errors.email}</span>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Profile

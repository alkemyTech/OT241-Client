import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contacto = () => {


    const sendMessage = (e) => {
        //Prevent refresh
        e.preventDefault()

        //send Logic

        //Clear Form
        document.getElementById("form").reset()
    }

  return (
    <div className='mt-5'>
        <h1 className="text-center">
            Formulario de Contacto
        </h1>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                <h2>What is Lorem Ipsum?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, ligula quis molestie mattis, est massa dignissim leo, vitae tempor ex turpis venenatis libero. Aliquam et accumsan urna, id accumsan sem. Ut sed faucibus mauris. Etiam nibh nisl, viverra in odio ac, lacinia vulputate massa. Duis facilisis lectus rutrum condimentum euismod. Morbi et venenatis dolor, ut efficitur nulla. Nam vitae ornare libero. Praesent nisl risus, molestie et urna ac, gravida ultrices velit.</p>
                </div>
                <div className="col-6">
                    <form onSubmit={sendMessage} id="form">
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" name= "nombre" aria-describedby="emailHelp" placeholder="Nombre" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name= "email" placeholder="correo@correo.cl" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mensaje</label>
                            <textarea className="form-control" id="mensaje" name= "comentario" placeholder="Deje su comentario aquí" style={{height: "100px"}} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacto
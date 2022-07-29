import Swal from 'sweetalert2'

/*
COMO USAR
Importar las funciones en el componente o page donde quieran usarlas
> Import {ConfirmAlert, ErrorAlert, InfoAlert} from './Components/Alerts'

Llamar la funcion donde sea necesario, pueden pasarles parametros con un objeto. Por ejemplo:
<button onClick={() => ConfirmAlert({text: 'texto para la alerta'})}>BORRAR</button>

Con las propiedades onConfirm y onCancel pueden pasarles funciones para ejecutar segun apreten cancelar o confirmar
<button onClick={() => ConfirmAlert({onConfirm: suFuncion()})}>BORRAR</button>
*/

const ConfirmAlert = (props) => {
  Swal.fire({
    title: 'Confirmar?',
    text: props.text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#0038FF',
    cancelButtonColor: '#FF0000',
    confirmButtonText: 'Si!',
    cancelButtonText:'No!'
  }).then((result) => {
    if (result.isConfirmed) {
      props.onConfirm && props.onConfirm()
    } else if (result.isDismissed) {
      props.onCancel && props.onCancel()
    }
  })
}

const ErrorAlert = (props) => {
  Swal.fire({
    title: 'Ocurrio un error!',
    text: props.text,
    icon: 'error',
    confirmButtonColor: '#0038FF',
    confirmButtonText: 'Ok'
  }).then(() => {
    props.onConfirm && props.onConfirm()
  })
}

const InfoAlert = (props) => {
  Swal.fire({
    title: props.title,
    text: props.text,
    icon: 'info',
    confirmButtonColor: '#0038FF',
    confirmButtonText: 'Ok'
  }).then(() => {
    props.onConfirm && props.onConfirm()
  })
}

export {ConfirmAlert, ErrorAlert, InfoAlert}
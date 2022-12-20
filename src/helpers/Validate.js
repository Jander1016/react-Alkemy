import swal from '@sweetalert/with-react'
import axios from 'axios'

const Validate = (emailUser, passwordUser, navigate) => {

  const regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  sessionStorage.clear()

  if (emailUser === '' || passwordUser === '') {
    return swal({title: 'Campos vacios', text: 'Vuelva a intentar', icon: 'warning', dangerMode: true})
  }

  if (!emailUser || ! regExEmail.test(emailUser)) {
    return swal({title: 'Email invalido', text: 'Ingrese un email correctamente', icon: 'warning', dangerMode: true})
  }

  if (emailUser !== 'challenge@alkemy.org' || passwordUser !== 'react') {
    return swal({title: "Credenciales invalidas!", text: "vuelve a intentar!", icon: "error", dangerMode: true});
  }

  axios.post('http://challenge-react.alkemy.org',{ email: emailUser, password: passwordUser})
  .then(res=> {
    const token = res.data.token;
    sessionStorage.setItem('token', token);
    swal({title: "Acceso satisfactorio!", text: `Bienvenido ${emailUser}`, icon:'success'});
    navigate('listado')
  })
  .catch(error => console.error(error))
  
}

export default Validate

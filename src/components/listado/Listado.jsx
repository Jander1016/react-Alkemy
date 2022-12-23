import {useState, useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import axios from 'axios';

import {Card} from 'react-bootstrap';
import swal from '@sweetalert/with-react';
import {Link} from 'react-router-dom';

const Listado = () => {

  const [movieList, setMovieList] = useState([])

  const {VITE_API_KEY, VITE_API_URL, VITE_IMAGES_URL} = import.meta.env

  const URL = `${VITE_API_URL}/discover/movie?api_key=${VITE_API_KEY}&language=es-ES&page=1`
  const token = sessionStorage.getItem('token')

  useEffect(() => {
    axios.get(URL)
    .then(movie => setMovieList(movie.data.results))
    .catch(error => swal({title: 'No hay información', text: 'Vuelva a intentar', icon: 'warning', dangerMode: true}))
  }, [])

  return (
    <> {
      !token && <Navigate to={"/"}/>
    }
      <div className='row'>
        {
        (movieList || !movieList.length) 
        ? movieList.map(item => (
          <article className='col col-sl-3 col-ml-2'
            key={
              item.id
          }>
            <Card style={
              {
                width: '18rem',
                height: '450px'
              }
            }>
              <Link to={
                    `/details/${
                      item.id
                    }`
                  }
                  className="btn btn-primary">
                    <Card.Img variant="top"
              
              src={
                VITE_IMAGES_URL + item.poster_path
              }
              alt='Imagen'/>
                  </Link>
              
            </Card>
          </article>
          ))
        : swal({title: 'No hay información', text: 'Vuelva a intentar', icon: 'warning', dangerMode: true})
      } </div>
    </>
  )
}

export default Listado

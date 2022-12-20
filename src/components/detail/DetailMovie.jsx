// import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getMovieById } from '../../api/Movies'


const { VITE_IMAGES_URL} = import.meta.env

const DetailMovie = ( ) => {
  const token = sessionStorage.getItem('token')
  const { id } = useParams()
  
  const {isLoading, data: movie, isError, error} = useQuery({
    queryKey: ['movie', id], 
    queryFn: async()=> await getMovieById(id)
  })

  if (isLoading) return <div>Loading...</div>
  else if (isError) return <div>Error: {error.message}</div>
  
  return (
    <>
      {
      !token && <Navigate to={"/"}/> 
      }
    <div className="card mb-3"  >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={VITE_IMAGES_URL + movie.backdrop_path} className="img-fluid rounded-start" alt={movie.overview} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <h5>Fecha de Lanzamiento:</h5>
            <p className="card-text">{movie.release_date}</p>
            <p className="card-text">{movie.overview}</p>
            <h5>Géneros:</h5>
            <ul>
              {movie.genres?.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
            <h5>Rating: {Math.round(movie.vote_average)}</h5>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default DetailMovie
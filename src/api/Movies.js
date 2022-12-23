import axios from 'axios'

const {VITE_API_URL, VITE_API_KEY} = import.meta.env

export const getAllMovies = async() =>{
  try {
    const res= await axios.get(VITE_API_URL)
    return res.data
  } catch (error) {
    console.log(error.message )
  }
}

export const getMovieById = async(id) =>{
  try {
    const res= await axios.get(`${VITE_API_URL}/movie/${id}?api_key=${VITE_API_KEY}&language=es-ES`)
    return res.data
  } catch (error) {
    console.log(error.message )
  }
}

export const getMovieVideoById = async(id) =>{
  try {
    const res= await axios.get(`${VITE_API_URL}/movie/${id}/videos?api_key=${VITE_API_KEY}&language=es-ES`)
    return res.data
  } catch (error) {
    console.log(error.message )
  }
}
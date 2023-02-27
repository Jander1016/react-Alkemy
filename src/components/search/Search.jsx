import {Form, FormControl, Button} from 'react-bootstrap';
import swal from '@sweetalert/with-react';
import { Navigate } from 'react-router-dom';

const Search = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.Search.value.trim()
    console.log(keyword)

    if(keyword.length === 0) {
      swal(<h4>Tienes que escribir una palabra clave</h4>)
    }else if(keyword.length < 4){
      swal(<h4>Tienes que escribir más caracteres</h4>)
    }else{
      <Navigate to={`/searchMovie`} />
    }


    // Navigate(`/listado?palabra-cl=${keyword}`)
  }
  return (
    <div>
      <Form className='d-flex'
        onSubmit={submitHandler}>
        <FormControl type='Search' placeholder='Search Movie' className='me-2' name='Search' aria-label='search'/>
        <Button variant='outline-success'>Search</Button>
      </Form>
    </div>
  )
}

export default Search

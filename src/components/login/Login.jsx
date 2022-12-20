import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import Validate from '../../helpers/Validate';


const Login = () => {

  const navigation = useNavigate()

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (token !== null) 
      navigation('/listado')
  }, [navigation])
  
  function submitHandler(e) {
    e.preventDefault();
    const emailUser = e.target.userEmail.value;
    const passwordUser = e.target.userPassword.value;
    Validate(emailUser, passwordUser, navigation);
  }

  return (
    <>
      <section className="container my-3">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-2" controlId="userEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name='userEmail' autoComplete='false' />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="userPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='userPassword' autoComplete='false' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </>
  )
}

export default Login

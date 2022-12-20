import {Form, FormControl, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const Header = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.Search.value.trim()

    // Navigate(`/listado?palabra-cl=${keyword}`)
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Challenge-Movie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
            <Link to='/listado'>Listado</Link>
            <Link to='/about'>About Me</Link>
          </Nav>
          <Form className='d-flex'
            onSubmit={submitHandler}>
            <FormControl type='Search' placeholder='Search Movie' className='me-2' name='Search' aria-label='search'/>
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

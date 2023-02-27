import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Search from '../search/Search';

const Header = () => {

  

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
         <Search />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

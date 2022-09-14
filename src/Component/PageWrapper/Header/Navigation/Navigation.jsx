import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css'
import logo from '../../../../images/Main-logo.png'
import './Navigation.css'

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container >
        <Navbar.Brand href="#">
            <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Departments</Nav.Link>
            <Nav.Link href="#action2">Pages</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
            <Nav.Link href="#action2">Contacts</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <Button className='nav-button main-nav-button' variant="outline-success">Free Consulation</Button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
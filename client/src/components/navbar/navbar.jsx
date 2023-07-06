import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Login from '../login/login';
import Cadastro from '../cadastro/cadastro';
import { Link } from 'react-router-dom';

import './navbar.css'

function NavScroll() {
  let currentUser = localStorage.getItem('user');
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid >
            <Link to={"/"} className='logo'><span>Portal</span>Deda</Link>
            <div className='d-flex justify-content-end'>
              <Form className="d-flex me-3">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-1"
                  aria-label="Search"
                  name='buscar'
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='menu'>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link to={"/"} className='link'>Home</Link>
                    {/* <Nav.Link href="#action2" className='link'>Link</Nav.Link> */}


                    <NavDropdown
                      title="Acessar"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className='link'
                    >
                      <Login />

                    </NavDropdown>
                    <NavDropdown
                      title="Criar conta"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className='link'
                    >
                     <Cadastro />

                    </NavDropdown>
                  </Nav>

                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavScroll;
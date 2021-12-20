import React from 'react'
import {Navbar,Container,Offcanvas,Nav,NavDropdown,Form,FormControl,Button } from
'react-bootstrap';

export default function Barra() {
return (
<div>
<Navbar bg="dark" variant="dark" expand={false}>
<Container fluid>
<Navbar.Brand href="http://localhost:3000">3loniouX</Navbar.Brand>
<Navbar.Toggle aria-controls="off canvasNavbar" />
<Navbar.Offcanvas
id="offcanvasNavbar"
aria-labelledby="offcanvasNavbarLabel"
placement="end"
>
<Offcanvas.Header closeButton>
<Offcanvas.Title id="offcanvasNavbarLabel">
Administración
</Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body>
<Nav className="justify-content-end flex-grow-1 pe-3">
<Nav.Link href="http://localhost:3000/rproyecto">Registrar Proyecto</Nav.Link>
<Nav.Link href="http://localhost:3000/verestudiantes">Ver Estudiantes</Nav.Link>
<Nav.Link href="http://localhost:3000/verproyectos">Ver Proyectos</Nav.Link>
<Nav.Link href="http://localhost:3001/gestorproyectos">Gestor de Proyectos</Nav.Link>
<NavDropdown title="Solicitudes" id="offcanvasNavbarDropdown">
<NavDropdown.Item href="http://localhost:3000">Creación</NavDropdown.Item>
<NavDropdown.Item href="http://localhost:3000">Aprobación </NavDropdown.Item>
{/*<NavDropdown.Divider />
 <NavDropdown.Item href="#action5">
Something else here
</NavDropdown.Item> */}
</NavDropdown>
</Nav>
<Form className="d-flex">
<FormControl
type="search"
placeholder="Search"
className="me-2"
aria-label="Search"
/>
<Button variant="outline-success">Search</Button>

</Form>
</Offcanvas.Body>
</Navbar.Offcanvas>
</Container>
</Navbar>
</div>
);
}

<NavDropdown.Item href="verestudiantes">Ver Lista
</NavDropdown.Item>

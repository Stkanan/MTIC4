import React from "react";
import { Form, Row,Col,Button } from "react-bootstrap";
export default function RegistrarEstudiante() {
return (
<div>
<Form>
<Row className="align-items-center">
<Form.Label>Registro de Estudiante</Form.Label>
<Form.Group as={Col} controlId="formGridEmail">
<Form.Label>Email</Form.Label>
<Form.Control type="email" placeholder="Ingrese Correo" />
</Form.Group>
<Form.Group as={Col} controlId="formGridPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Contraseña" />
</Form.Group>
</Row>
<Form.Group className="mb-1" controlId="formGridAddress1">
<Form.Label>Identificació<nav></nav></Form.Label>
<Form.Control placeholder="Número de Documento" />
</Form.Group>
<Row className="mb-1">
<Form.Group as={Col} controlId="formGridCity">
<Form.Label>Sede</Form.Label>
<Form.Control />
</Form.Group>
<Form.Group as={Col} controlId="formGridState">
<Form.Label>Facultade</Form.Label>
<Form.Select defaultValue="Choose...">
<option>Escoger</option>
<option>...</option>
</Form.Select>
</Form.Group>

<Form.Group as={Col} controlId="formGridZip">
<Form.Label>Zip</Form.Label>
<Form.Control />
</Form.Group>
</Row>
<Form.Group className="mb-3" id="formGridCheckbox">
<Form.Check type="checkbox" label="Verificar" />
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
</div>
);
}
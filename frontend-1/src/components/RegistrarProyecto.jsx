import React from "react";
import { Form, Row,Col,Button } from "react-bootstrap";
export default function RegistrarProyecto() {
return (
<div>
<Form>
<Row className="align-items-center">
<Form.Label>Registro de Proyecto</Form.Label>

<Form.Group as={Col} controlId="formGridEmail">
<Form.Label>Nombre</Form.Label>
<Form.Control type="Nombre" placeholder="Ingrese Proyecto" />
</Form.Group>

<Form.Group as={Col} controlId="formGridPassword">
<Form.Label>Presupuesto</Form.Label>
<Form.Control type="presupuesto" placeholder="$0.000.000" />
</Form.Group>

</Row>
<Form.Group className="mb-1" controlId="formGridAddress1">
<Form.Label>Objetivos<nav></nav></Form.Label>
<Form.Control placeholder="Número de Documento" />
</Form.Group>

<Row className="mb-1">


<Form.Group as={Col} controlId="formGridState">
<Form.Label>Fecha Inicio</Form.Label>
<Form.Select defaultValue="Choose...">
<option>Escoger</option>
<option>...</option>
</Form.Select>
</Form.Group>

<Form.Group as={Col} controlId="formGridState">
<Form.Label>Fecha Final</Form.Label>
<Form.Select defaultValue="Choose...">
<option>Escoger</option>
<option>...</option>
</Form.Select>
</Form.Group>

<Form.Group as={Col} controlId="formGridZip">
<Form.Label>Avances</Form.Label>
<Form.Control />
</Form.Group>
</Row>

{/**
<Form.Group className="mb-3" id="formGridCheckbox">
<Form.Check type="checkbox" label="Verificar" />
</Form.Group>

 */}

<Button variant="primary" type="submit">
Submit
</Button>


</Form>
</div>


);
}
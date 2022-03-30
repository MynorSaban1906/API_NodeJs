import {
  Card,
  Table,
  Row,
  Col,
  Container
} from "react-bootstrap";
import React, { useEffect, useState } from "react";


function App() {
  const [Estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    obtenerEstudiantes();
  }, []);

  const obtenerEstudiantes = () => {
    fetch(`${"http://localhost:3000/students"}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
    })
      .then((res) => res)
      .then(async function (response) {
        if (response.status === 200) {
          let respuesta = await response.json();

          console.log(respuesta);
          setEstudiantes(respuesta.Estudiantes);
          
        } else {
          alert('algo anda mal');
        }
      })
      .catch((error) => console.log(error));
  };



  return (
    <div className="App">
      <Container>
        <div className="content">
          <Row>
          <Col md="12">
              <Card>
              <Card.Header>
                  <Card.Title tag="h1">Empleos en la empresa</Card.Title>
              </Card.Header>
              <Card.Body>
                  <Row>
                  <br />
                  <br />
                  <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                      <tr>
                          <th>NOMBRE</th>
                          <th>APELLIDO</th>
                          <th>CORREO</th>
                          <th>CARNET</th>
                      </tr>
                      </thead>
                      <tbody>
                      {Estudiantes.map((estudiante, i) => {
                          return (
                          <tr key={i}>
                              <th>{estudiante.nombre}</th>
                              <th>{estudiante.apellido}</th>
                              <th>{estudiante.correo}</th>
                              <th>{estudiante.carnet}</th>
                          </tr>
                          );
                      })}
                      </tbody>
                  </Table>
                  </Row>
              </Card.Body>
              </Card>
          </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;

import React from 'react'
import { Container, Form, Badge, Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepForward, faGlobeAmericas, faGrinHearts, faGlassCheers, faTools, faHandPointRight } from '@fortawesome/free-solid-svg-icons'

const FormMovement = () => {

  const style = {
    width: "50%"
  }

  return (
    <Container>
      <div className="mb-4">
        <Nav className="justify-content-between" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/movements">Cancelar</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Nuevo Tricount
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Guardar</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <Form>
        <Form.Group controlId="formBasicTitle">
          <Form.Control type="email" placeholder="Título" />
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Control type="description" placeholder="Descripción" />
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Divisa</Form.Label>
          <Form.Control type="divisa" placeholder="Divisa" as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <Form.Text className="text-muted">
            Específica la divisa que se utilizará paraq cuadrar el tricount. <br></br>
            Pueden usarse otras divisas para los gastos.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Categoria</Form.Label>
          <div>
            <Badge pill variant="light">
              <FontAwesomeIcon icon={faStepForward}></FontAwesomeIcon>
              Viaje
            </Badge>
            <Badge pill variant="light">
              <FontAwesomeIcon icon={faGlobeAmericas}></FontAwesomeIcon>
              Casa compartica
            </Badge>
            <Badge pill variant="light">
              <FontAwesomeIcon icon={faGrinHearts}></FontAwesomeIcon>
              Pareja
            </Badge>
            <Badge pill variant="light">
              <FontAwesomeIcon icon={faGlassCheers}></FontAwesomeIcon>
              Celebración
            </Badge>{' '}
            <Badge pill variant="light">
              <FontAwesomeIcon icon={faTools}></FontAwesomeIcon>
              Proyecto
            </Badge>{' '}
            <Badge pill variant="light">
              <FontAwesomeIcon icon={faHandPointRight}></FontAwesomeIcon>
              Otros
            </Badge>
          </div>
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Participantes</Form.Label>
          <div className="d-flex">
            <Form.Control className="mr-3" style={style} type="description" placeholder="Mi nombre" />
            <Button>Añadir</Button>
          </div>
        </Form.Group>
        <Form.Text className="text-muted">
          Enlaza los participantes con tus contactos para que podamos invitarlos automáticamente al tricount
        </Form.Text>

      </Form>
    </Container>
  )
}

export default FormMovement

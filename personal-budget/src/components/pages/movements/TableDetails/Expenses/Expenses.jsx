import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'

const Expenses = () => {

  const movements = [
    {
      id: "5",
      title: "Surtidor",
      subtitle: "Camion"
    }
  ]

  return (
    <div>
      <h1>Expenses</h1>
      <>
        <Table striped hover>
          {movements.map(movement =>
          (
            <tbody key={movement.id}>
              <tr>
                <td>
                  <h5>{movement.title}</h5>
                  <span>{movement.subtitle}</span>
                </td>
                <td>
                  <FontAwesomeIcon className="icon-forward" icon={faStepForward}></FontAwesomeIcon>
                </td>
              </tr>
            </tbody>
          )
          )}
        </Table>
        <Button className="circle-bottom-centered" variant="primary">+</Button>{' '}
      </>
    </div>
  )
}

export default Expenses

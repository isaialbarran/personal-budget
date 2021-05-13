import React from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'

import './style.css'

const TableMov = ({ movements }) => {
  console.log("props", movements);
  return (
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
    </>
  )
}

export default TableMov

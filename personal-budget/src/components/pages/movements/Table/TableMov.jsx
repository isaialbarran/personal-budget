import React from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const TableMov = ({ props, movements }) => {

  const openTricount = (movement) => {
    const { history, location } = props
    return history.push(`${location.pathname}/${movement.id}`)
  }

  return (
    <>
      <Table striped hover>
        {movements.map(movement =>
        (
          <tbody key={movement.id}>
            <tr onClick={() => openTricount(movement)}>
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
import React from 'react'
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'

const TableMov = () => {
  return (
    <>
      <Table striped hover>
        <tbody>
          <tr>
            <td>
              <h5>Title</h5>
              <span>Subtitle</span>
            </td>
            <td>
              <FontAwesomeIcon className="icon-forward" icon={faStepForward}></FontAwesomeIcon>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default TableMov

import React from 'react'
import { Table, Button } from 'react-bootstrap';

export const TableMovementComponent = ({ transactions, setTransactions }) => {

  const deleteValue = (id) => {
    const resp = transactions.filter(transaction => transaction.id !== id)
    setTransactions(resp)
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, amount, date, title, type }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{date}</td>
              <td>{amount}</td>
              <td>{type}</td>
              <td><Button onClick={() => deleteValue(id)}>x</Button></td>
            </tr>
          ))}
          {transactions.length === 0 &&
            <tr>
              <td className="text-center" colSpan="5">Añade algunos datos</td>
            </tr>
          }
        </tbody>
      </Table>
    </div>
  )
}

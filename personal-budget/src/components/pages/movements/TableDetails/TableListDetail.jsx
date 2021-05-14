import React, { useState } from 'react'
import { Container, Tab, Tabs, Nav } from 'react-bootstrap'

import Balances from './Balances/Balances'
import Expenses from './Expenses/Expenses'

import './styles.css'

const TableListDetail = (props) => {

  const [key, setKey] = useState('expenses');

  return (
    <Container>
      <div className="mb-4">
        <Nav className="justify-content-between" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/movements">Atrás</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Título del tricount
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Opciones</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab tabClassName="text-center w-50 p-4" eventKey="expenses" title="Expenses">
          <Expenses />
        </Tab>
        <Tab tabClassName="text-center w-50 p-4" eventKey="balances" title="Balances">
          <Balances />
        </Tab>
      </Tabs>
    </Container >
  )
}

export default TableListDetail

import React, { useEffect, useState } from 'react'
import NavbarMov from './Navbar/NavbarMov'
import TableMov from './Table/TableMov'
import { Container, Spinner, Button } from 'react-bootstrap'

import { transaction } from '../../../mocks/transactions'

import './style.css'

const Movements = (props) => {

    const [movements, setMovements] = useState([])
    const [loading, setLoading] = useState(true)

    const createTricount = () => {
        const { history, match } = props
        return history.push(`${match.path}/add`)
    }

    useEffect(() => {
        /*setTimeout(() => {
            console.log("transaction", transaction);
            console.log("loading final", loading);
        }, 2000)*/
        setMovements(transaction)
        setLoading(false)
    }, [])

    return (
        <Container className="position-relative">
            <NavbarMov></NavbarMov>
            {loading
                ?
                <div className="box">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
                :
                <>
                    <TableMov props={props} movements={movements}></TableMov>
                    <Button onClick={createTricount} className="circle-bottom" variant="primary">+</Button>{' '}
                </>
            }
        </Container>
    )
}

export default Movements

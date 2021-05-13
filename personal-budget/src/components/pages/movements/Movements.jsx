import React, { useEffect, useState } from 'react'
import NavbarMov from './Navbar/NavbarMov'
import TableMov from './TableMov/TableMov'
import { Spinner } from 'react-bootstrap'

import { transaction } from '../../../mocks/transactions'

import './style.css'

const Movements = () => {

    const [movements, setMovements] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("cargo");
        console.log("movements", movements);
        setTimeout(() => {
            console.log("transaction", transaction);
            console.log("loading final", loading);
            setMovements(transaction)
            setLoading(false)
        }, 2000)
    }, [])



    return (
        <>
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
                    <TableMov movements={movements}></TableMov>
                </>
            }
        </>
    )
}

export default Movements

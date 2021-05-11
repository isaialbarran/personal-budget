import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Spinner, Button, Container, Navbar, Modal, Form } from 'react-bootstrap';

import mockTransactions from '../../../mocks/transactions'

import { TableMovementComponent } from './TableComponent'

import './style.css'

const Movements = () => {

    const [transactions, setTransactions] = useState([])

    const [loading, setLoading] = useState(true)

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setForm({})
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const [form, setForm] = useState({
        title: "",
        date: "",
        type: "",
        amount: ""
    })

    const [formError, setFormError] = useState({
        title: "",
        date: "",
        type: "",
        amount: ""
    })

    const fetchTransactions = async () => {
        setTimeout(() => {
            setTransactions(mockTransactions.transactions)
            console.log(transactions);
            setLoading(false)
        }, 2000);
        console.log("transactions", transactions);
    };

    const checkFormError = () => {
        console.log("hola :)");
        if (form.title.length < 3) {
            setFormError({ title: "Name to short" })
        }
    }

    const handleChange = (e) => {
        console.log("e", e.target.value);
        console.log("e", e.target);
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log("form", form);
    }

    const handleSubmit = e => {
        console.log("entro", e);
        console.log("form", form);
        checkFormError()
        e.preventDefault()
        return;
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <div>
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#"><h1>Movements</h1></Navbar.Brand>
                    {loading ? "" : <Button onClick={handleShow} variant="primary">Add movement</Button>}
                </Navbar>
                {loading ?
                    <Container className="main h-500">
                        <div className="spinner-layout">
                            <Spinner animation="border" role="status"></Spinner>
                        </div>
                    </Container>
                    : <div>
                        <TableMovementComponent setTransactions={setTransactions} transactions={transactions}></TableMovementComponent>
                    </div>
                }
                {show && <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Movement Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    type="text"
                                    isInvalid={!!formError.title}
                                    placeholder="Enter a title" />
                                <Form.Control.Feedback type="invalid">
                                    {formError.title}
                                </Form.Control.Feedback>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    type="date"
                                    placeholder="Date" />
                            </Form.Group>

                            <Form.Group controlId="formBasicAmount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control
                                    name="amount"
                                    value={form.amount}
                                    onChange={handleChange}
                                    type="number"
                                    placeholder="Enter the amount" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicType">
                                <Form.Label>Type</Form.Label>
                                <Form.Control
                                    name="type"
                                    value={form.type}
                                    onChange={handleChange}
                                    as="select">
                                    <option value="0">Choose...</option>
                                    <option value="output">Output</option>
                                    <option value="input">Income</option>
                                </Form.Control>
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                }
            </Container>
        </div>
    )
}

export default Movements

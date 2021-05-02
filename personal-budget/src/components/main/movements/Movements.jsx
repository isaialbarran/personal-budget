import React, { useState, useEffect } from 'react'
import './style.css'
import mockTransactions from '../../../mocks/transactions'
import { v4 as uuidv4 } from 'uuid';

const Movements = () => {

    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        console.log("form", form);
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }

    const fetchTransactions = async () => {
        setTimeout(() => {
            setTransactions(mockTransactions.transactions)
            console.log(transactions);
            setLoading(false)
        }, 2000);
        console.log("transactions", transactions);
    };

    const findFormErrors = () => {
        const { date, title, description } = form
        const newErrors = {}
        // name errors
        if (!title || title === '') newErrors.title = 'cannot be blank!'
        else if (title.length > 30) newErrors.title = 'name is too long!'
        // description errors
        if (!description || description === '') newErrors.description = 'cannot be blank!'
        else if (description.length > 100) newErrors.description = 'description is too long!'

        console.log("errors", errors);

        return newErrors
    }

    const clearForm = () => {
        document.getElementById("movementForm").reset();
        const initialForm = {
            id: "",
            date: "",
            title: "",
            description: ""
        }
        setForm({ ...initialForm })
    }

    const handleSubmit = e => {
        console.log("entro", e);
        e.preventDefault()
        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors)
        } else {
            form.id = uuidv4()
            // No errors! Put any logic here for the form submission!
            console.log("form before", form);

            setTransactions([...transactions, form])
            console.log("transactions", transactions);
            console.log("form after", form);
            clearForm()
            alert('Thank you for your feedback!')
        }
    }

    const deleteValue = (id) => {
        const resp = transactions.filter(transaction => transaction.id !== id)
        setTransactions(resp)
    }

    const editValue = (id) => {
        const value = transactions.find(transaction => transaction.id === id)
        console.log("value", value);
        const objectToEdit = {
            title: value.title,
            description: value.description
        }
        setForm({ objectToEdit })
        console.log("form", form);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <div>
            <div>
                <h1 className="square">Movements</h1>
            </div>
            {loading ? <h1>Cargando</h1> : <div>
                <ul>
                    {transactions.map(transaction => (
                        <li key={transaction.id}>
                            <div>{transaction.date}{transaction.amount}</div>
                            <div>{transaction.title}</div>
                            <div>{transaction.description}</div>
                            <button type="button" onClick={() => editValue(transaction.id)}>Edit</button>
                            <button type="button" onClick={() => deleteValue(transaction.id)}>Delete</button><hr />
                        </li>
                    ))}
                </ul>
            </div>}

            <form id="movementForm">
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder="Title"
                        onChange={e => setField('title', e.target.value)}
                    />
                    {errors.title ? <span>{errors.title}</span> : ""}
                </div>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        placeholder="Description"
                        onChange={e => setField('description', e.target.value)} />
                    {errors.description ? <span>{errors.description}</span> : ""}

                </div>
                <button variant="primary" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Movements

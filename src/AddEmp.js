import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function AddEmp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); 

        const employeeData = {
            name,
            email,
            mobile,
            state,
            district
        };

        fetch('https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employeeData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setSuccessMessage('Employee added successfully!');
            setErrorMessage('');
            setName('');
            setEmail('');
            setMobile('');
            setState('');
            setDistrict('');
        })
        .catch((error) => {
            console.error('Error:', error);
            setErrorMessage('An error occurred while adding the employee.');
            setSuccessMessage('');
        });
    }

    return (
        <>
            <h1>Add new employee</h1>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="InputName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="InputEmail">
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="InputMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="InputState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="InputDistrict">
                    <Form.Label>District</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter District"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Employee
                </Button>
            </Form>
        </>
    );
}

export default AddEmp;

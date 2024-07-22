import React, { useState, useEffect } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Home() {
    const [employees, setEmployees] = useState([]);
    const [employeeId, setEmployeeId] = useState('');
    const [searchedEmployee, setSearchedEmployee] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${employeeId}`);
            setSearchedEmployee(response.data);
            setError(null);
        } catch (err) {
            setError('Employee not found');
            setSearchedEmployee(null);
        }
    };

    return (
        <>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        placeholder="Enter Employee ID"
                    />
                </Form.Group>
                <Button onClick={handleSearch} variant="primary">Search</Button>
            </Form>
            
            {error && <Alert variant="danger">{error}</Alert>}
            
            {searchedEmployee && (
                <div>
                    <h2>Employee Details</h2>
                    <p>Name: {searchedEmployee.name}</p>
                    <p>Email ID: {searchedEmployee.emailId}</p>
                    <p>Mobile: {searchedEmployee.mobile}</p>
                    <p>State: {searchedEmployee.state}</p>
                    <p>District: {searchedEmployee.district}</p>
                </div>
            )}

            <Table bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Mobile</th>
                        <th>State</th>
                        <th>District</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.emailId}</td>
                            <td>{employee.mobile}</td>
                            <td>{employee.state}</td>
                            <td>{employee.district}</td>
                            <td>
                                <Button variant="warning" className="m-1">Edit</Button>
                                <Button variant="danger" className="m-1">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Home;

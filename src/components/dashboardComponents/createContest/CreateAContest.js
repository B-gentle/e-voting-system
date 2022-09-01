import React from 'react';
import './createAContest.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateAContest = () => {
    return (
        <div className='create-a-contest'>
            <h2>Welcome To BeeTech Online Voting Service</h2>
            <p>Register Your Contest</p>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Select aria-label="Default select example">
                    <option>Select Your Contest type</option>
                    <option value="1">Photo Contest</option>
                    <option value="2">e-voting</option>
                    <option value="3">Developer of the year</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default CreateAContest
import React, { useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import styles from './Register.module.scss';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length < 6 || password < 6) {
      setError(true);
    }
  };

  return (
    <Container className={styles.container}>
      <Form
        className="col-12 col-sm-3 mx-auto my-5 pb-5"
        onSubmit={handleSubmit}
      >
        <h1>Register</h1>
        {error && (
          <Alert variant="danger">
            Username or password is too short. You need at least 6 characters
          </Alert>
        )}
        <Form.Group>
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || 0,
  );
  const navigate = useNavigate();
  if (user) {
    setTimeout(() => {
      navigate('/');
      localStorage.removeItem('user');
    }, 4000);
  }

  return (
    <div>
      {user ? (
        <Container className="text-center my-5">
          <h2 className="my-5">Thank you for the visit!</h2>
          <h4 className="my-5">See you soon!</h4>
        </Container>
      ) : (
        <Container className="text-center my-5">
          {' '}
          <h4 className="my-5">
            You are not logged in, you should not be here!
          </h4>
        </Container>
      )}
    </div>
  );
};

export default Logout;

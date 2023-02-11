import styles from './Order.module.scss';
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';
import { use } from 'passport';
import { addOrder } from '../../../redux/orderRedux';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [code, setCode] = useState();
  const [cart, setCart] = useState(useSelector(getCart));
  const [totalPrice, setTotalPrice] = useState(getTotalPrice());
  const [deliveryCost, setdeliveryCost] = useState(0);
  const [status, setStatus] = useState();
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function getTotalPrice() {
    let totalPrice = 0;
    cart.map((i) => {
      totalPrice = totalPrice + i.productData.price * i.value;
    });
    return totalPrice;
  }

  const handleSubmit = () => {
    const order = {
      products: cart,
      client: {
        name: name,
        lastName: lastName,
        address: address,
        city: city,
        code: code,
        totalPrice: totalPrice,
        deliveryCost: deliveryCost,
      },
    };
    dispatch(addOrder(order));
    setStatus('success');
    setTimeout(() => {
      navigate('/summary');
    }, 3000);
    localStorage.removeItem('cart');
  };

  return (
    <div className={styles.root}>
      <Container>
        <h1 className={styles.title}>Order</h1>
        <Form onSubmit={validate(handleSubmit)}>
          <Row>
            <Col md={12} lg={8}>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    {...register('name', {
                      required: true,
                      minLength: 2,
                      maxLength: 15,
                    })}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required and has to be between 2 to 15
                      characters long.
                    </small>
                  )}
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    {...register('lastname', {
                      required: true,
                      minLength: 2,
                      maxLength: 20,
                    })}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastname && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required and has to be between 2 to 20
                      characters long.
                    </small>
                  )}
                </Form.Group>
              </Row>
              <Form.Group as={Col}>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  {...register('address', {
                    required: true,
                    minLength: 2,
                    maxLength: 40,
                  })}
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                />
                {errors.address && (
                  <small className="d-block form-text text-danger mt-2">
                    This field is required and has to be between 2 to 40
                    characters long.
                  </small>
                )}
              </Form.Group>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    {...register('city', {
                      required: true,
                      minLength: 2,
                      maxLength: 40,
                    })}
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                  />
                  {errors.city && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required and has to be between 2 to 40
                      characters long.
                    </small>
                  )}
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    {...register('code', {
                      required: true,
                      minLength: 2,
                      maxLength: 40,
                    })}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  {errors.code && (
                    <small className="d-block form-text text-danger mt-2">
                      This field is required and has to be between 2 to 10
                      characters long.
                    </small>
                  )}
                </Form.Group>{' '}
                <Form.Group className="mb-3" id="formCheckbox">
                  <Form.Check
                    {...register('checkbox', {
                      required: true,
                    })}
                    label="I accept the terms of delivery"
                    feedbackType="invalid"
                  />
                  {errors.checkbox && (
                    <small className="d-block form-text text-danger mt-2">
                      You must agree before submitting
                    </small>
                  )}
                </Form.Group>
              </Row>
            </Col>
            <Col md={12} lg={4} className={styles.info}>
              <p>Your order:</p>
              {cart
                ? cart.map((product) => {
                    return (
                      <div className={'d-flex justify-content-between mb-1'}>
                        <p>{product.productData.name}</p>
                        <p>{product.productData.price * product.value}$</p>
                      </div>
                    );
                  })
                : ''}
              <h4>Price for products: {totalPrice}$</h4>
              <span>Delivery method</span>
              <Form.Group className="my-1">
                <Form.Check
                  className="my-2"
                  inline
                  label="Personal collection"
                  name="delivery"
                  type="radio"
                  id={`1`}
                  onChange={() => setdeliveryCost(0)}
                  defaultChecked={true}
                />
                <Form.Check
                  className="my-1"
                  inline
                  label="Shipping by mail 15$"
                  name="delivery"
                  type="radio"
                  id={`2`}
                  value={15}
                  onChange={() => setdeliveryCost(15)}
                />
                <Form.Check
                  className="my-1"
                  inline
                  label="Send by courier 25$"
                  name="delivery"
                  type="radio"
                  id={`3`}
                  value={25}
                  onChange={() => setdeliveryCost(25)}
                />
              </Form.Group>
              <h3 className="mt-3">
                Total Price: {totalPrice + deliveryCost}$
              </h3>
              <Button variant="outline-secondary" type="submit">
                Submit your order
              </Button>
            </Col>
          </Row>
        </Form>
        {status === 'success' && (
          <Alert variant="success" className="mt-3">
            <Alert.Heading>Success!</Alert.Heading>
            <p>You have placed the order correctly</p>
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default Order;

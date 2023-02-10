import React from 'react';
import styles from './Navbar.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BsCart, BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';

const NavBar = () => {
  const cart = useSelector(getCart);
  console.log(cart);

  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">
          <div class={styles.logo_div}>
            <button href="/">F-Step</button>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="px-5 my-2 my-lg-0 justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Row className={'justify-content-end' + styles.row}>
            <Col className="col-6">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className={'me-2 '}
                />
                <Button className={styles.bnt} variant="outline-secondary">
                  <BsSearch />
                </Button>
              </Form>
            </Col>
            <Col className="col-3">
              <Link
                to="/cart"
                className={'d-flex align-items-center justify-content-around '}
              >
                <Button className={styles.bnt} variant="outline-secondary">
                  <BsCart />
                </Button>
                <p
                  className={
                    'd-flex align-items-center justify-content-center m-0 p-1 '
                  }
                ></p>
              </Link>
            </Col>
            <Col className="col-2">
              <Nav>
                <NavDropdown title="User Panel">
                  <NavDropdown.Item href="/loginUser">Login</NavDropdown.Item>
                  <NavDropdown.Item href="/registerUser">
                    Register
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

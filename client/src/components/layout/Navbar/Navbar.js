import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import { BsCart, BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu} from 'react-icons/gi';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NavBar = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || [],
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || [],
  );

  const [width, setWidth] = useState(window.innerWidth)
  console.log(width)

  window.addEventListener('resize', (e) => {
    setWidth(window.innerWidth)
  })

  useEffect(() => {
    if (cart.length > 0) {
      setCart(JSON.parse(localStorage.getItem('cart')));
      getLength();
    }
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [cart]);

  function getLength() {
    let total = 0;
    cart.forEach((item) => {
      total = total + 1;
    });

    return total;
  }

  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">
          <div class={styles.logo_div}>
            <button href="/">F-Step</button>
          </div>
        </Navbar.Brand>
        {width > 780 ? <Navbar.Collapse
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
            <Col className="col-1">
              <Link
                to="/cart"
                className={'d-flex align-items-center justify-content-around '}
              >
                <Button className={styles.bnt} variant="outline-secondary">
                  <BsCart />
                </Button>
              </Link>
            </Col>
            <Col className={'col-2'}>
              <p
                className={
                  'd-flex align-items-center justify-content-center m-0 ' +
                  styles.cartLenght
                }
              >
                {getLength() || 0}
              </p>
            </Col>
            <Col className="col-3">
              <Nav>
                {user ? (
                  <NavDropdown title={`Hi ${user.login}`}>
                    <NavDropdown.Item href="/logoutUser">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown title={'User Panel'}>
                    <NavDropdown.Item href="/loginUser">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/registerUser">
                      Register
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse> : 
            <DropdownButton
            id={`dropdown-button-drop-start`}
            drop='start'
            variant="outline-secondary"
            title={<GiHamburgerMenu />}
          > 
            {user ? <Dropdown.Item href="/logoutUser">Logout</Dropdown.Item>
                  : <><Dropdown.Item href="/loginUser">Login</Dropdown.Item>
                      <Dropdown.Item href="/registerUser">Register</Dropdown.Item>
                    </>}
                    <Dropdown.Divider />
                    <Dropdown.Item href="/">Home</Dropdown.Item>

            <Dropdown.Item href="/cart">Cart <BsCart /></Dropdown.Item>
          </DropdownButton>
          
          }
      </Container>
    </Navbar>
  );
};

export default NavBar;

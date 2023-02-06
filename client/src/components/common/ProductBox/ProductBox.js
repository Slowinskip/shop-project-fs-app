import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from './ProductBox.module.scss';
import { Link } from 'react-router-dom';
const ProductBox = ({ name, image, oldPrice, price, id, category }) => {
  return (
    <Card className={styles.root}>
      <Card.Img variant="top" src={`./images/products/${image}`} />
      <Card.Body className="text-center">
        <Col className="d-flex justify-content-center">
          {oldPrice > 0 ? (
            <>
              <p className={styles.categories}>For {category}</p>
              <p className={styles.sale}>SALE</p>
            </>
          ) : (
            <p className={styles.categories}>For {category}</p>
          )}
        </Col>
        <Card.Title className={styles.cardTitle}>{name}</Card.Title>
        <Card.Text className="m-0">
          {oldPrice > 0 ? (
            <div className={'d-flex justify-content-center ' + styles.priceDiv}>
              <span className={styles.price}>${price}</span>
              <span className={styles.oldPrice}>${oldPrice}</span>
            </div>
          ) : (
            <div className={'d-flex justify-content-center ' + styles.priceDiv}>
              <span className={styles.normalPrice}>${price}</span>
            </div>
          )}
        </Card.Text>
        <Link to={'/product/' + id}>
          <Button variant="outline-secondary" size="sm" className="mx-1 mb-1">
            View more
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductBox;

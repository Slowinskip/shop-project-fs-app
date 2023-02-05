import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from './ProductBox.module.scss';
import { Link } from 'react-router-dom';
const ProductBox = ({ name, image, oldPrice, price }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`./images/products/${image}`}
        className={styles.image}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>{' '}
        <Card.Text className="m-0">
          {oldPrice > 0 ? (
            <span>
              <span className={styles.new_price}>${price}</span>{' '}
              <span className={styles.old_price}>
                <del>${oldPrice}</del>
              </span>
            </span>
          ) : (
            <span>${price}</span>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductBox;

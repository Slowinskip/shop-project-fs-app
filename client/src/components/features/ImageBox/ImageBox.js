import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styles from './ImageBox.module.scss';

const ImageBox = () => {
  return (
    <Row>
      <Col className="col-11">
        <div class={styles.card}>
          <img
            className={styles.img1}
            src=".\images\carousel\adidas1.jpg"
            alt="Second slide"
          ></img>
          <img src=".\images\carousel\adidas1.jpg" alt="Second slide"></img>
          <img src=".\images\carousel\adidas1.jpg" alt="Second slide"></img>
        </div>
      </Col>
      <Col className="col-1">1</Col>
    </Row>
  );
};

export default ImageBox;

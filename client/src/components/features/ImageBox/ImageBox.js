import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styles from './ImageBox.module.scss';

const ImageBox = () => {
  return (
    <Row>
      <Col className="col-11">
        <div class={styles.card}>
          <div className={styles.img}>
            <div className={styles.content}>
              <h2>You choose the style</h2>
              <Button className={styles.btn} variant="light">
                See more
              </Button>
            </div>
            <img
              className={styles.img1}
              src=".\images\ImageBox\image1.jpeg"
              alt="Second slide"
            ></img>
          </div>
          <div className={styles.img}>
            <div className={styles.content}>
              <h2>The new model is already on sale!</h2>
            </div>
            <img src=".\images\ImageBox\image2.jpeg" alt="Second slide"></img>
          </div>
          <div className={styles.img}>
            <div className={styles.content}>
              <h2>New Jordans in 2 colors</h2>{' '}
              <Button className={styles.btn} variant="light">
                See more
              </Button>
            </div>
            <img src=".\images\ImageBox\image3.jpeg" alt="Second slide"></img>
          </div>
        </div>
      </Col>
      <Col className="col-1">1</Col>
    </Row>
  );
};

export default ImageBox;

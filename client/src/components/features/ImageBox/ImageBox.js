import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import styles from './ImageBox.module.scss';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { BsCashStack } from 'react-icons/bs';
import { GiReturnArrow } from 'react-icons/gi';
import { AiFillPhone } from 'react-icons/ai';

import { Container } from 'react-bootstrap';
const ImageBox = () => {
  return (
    <Container>
      1
      <Row className={styles.imageBox}>
        <Col md={12} lg={8}>
          <div className={styles.card}>
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
        <Col md={12} lg={4}>
          <Row>
            <Col md={6} lg={12} className={styles.informationBox}>
              <div className={'col-3 ' + styles.icon}>
                <MdOutlineLocalShipping size={60} />
              </div>
              <div className={'col-8 ' + styles.informationText}>
                <h2>Free delivery</h2>
                <h5>Orders over $40</h5>
              </div>
            </Col>
            <Col md={6} lg={12} className={styles.informationBox}>
              <div className={'col-3 ' + styles.icon}>
                <BsCashStack size={60} />
              </div>
              <div className={'col-8 ' + styles.informationText}>
                <h2>Cashback</h2>
                <h5>You can save 5%</h5>
              </div>
            </Col>
            <Col md={6} lg={12} className={styles.informationBox}>
              <div className={'col-3 ' + styles.icon}>
                <GiReturnArrow size={60} />
              </div>
              <div className={'col-8 ' + styles.informationText}>
                <h2>Free Returns</h2>
                <h5>Within 14 days of ordering</h5>
              </div>
            </Col>
            <Col md={6} lg={12} className={styles.informationBox}>
              <div className={'col-3 ' + styles.icon}>
                <AiFillPhone size={60} />
              </div>
              <div className={'col-8 ' + styles.informationText}>
                <h2>Support</h2>
                <h5>We are there for you 24/7</h5>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageBox;

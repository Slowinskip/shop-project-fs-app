import Button from 'react-bootstrap/Button';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './CarouselRc.module.scss';
import { Container } from 'react-bootstrap';

const CarouselRc = () => {
  return (
    <Container>
      <Carousel fade className={styles.carousel}>
        <Carousel.Item className={styles.carouselItem}>
          <img
            className="d-block w-100 "
            src=".\images\carousel\nike1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className={styles.content}>
            <div>
              <h3>Meet Nike</h3>
              <div className="d-flex justify-content-center align-items-center ">
                <p className="px-3 m-0 ">Convenience comes first </p>
                <Button className={styles.btn} variant="light">
                  See more
                </Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
          <img
            className="d-block w-100"
            src=".\images\carousel\adidas1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className={styles.content}>
            <div>
              <h3>Runners Choices</h3>
              <div className="d-flex justify-content-center align-items-center ">
                <p className="px-3 m-0 ">Now up to -30%</p>
                <Button className={styles.btn} variant="light">
                  See more
                </Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
          <img
            className="d-block w-100"
            src=".\images\carousel\nike-woman.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className={styles.content}>
            <div>
              <h3>Just for woman!</h3>
              <div className="d-flex justify-content-center align-items-center ">
                <p className="px-3 m-0 ">Rose never gets bored</p>
                <Button className={styles.btn} variant="light">
                  See more
                </Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselRc;

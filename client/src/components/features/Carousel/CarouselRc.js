import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './CarouselRc.module.scss';

const CarouselRc = () => {
  return (
    <Carousel fade className={styles.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src=".\images\carousel\nike1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className={styles.content}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=".\images\carousel\adidas1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className={styles.content}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=".\images\carousel\nike-woman.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className={styles.content}>
            <h3>Just for woman!</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselRc;

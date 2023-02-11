import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row className={styles.row}>
          <Col md={6} lg={3} className={'d-flex ' + styles.media}>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className={'col-3 ' + styles.twitter}
            >
              <BsTwitter />
            </a>
          </Col>{' '}
          <Col md={6} lg={3} className={'d-flex ' + styles.media}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className={styles.facebook}
            >
              <FaFacebookF />
            </a>
          </Col>{' '}
          <Col md={6} lg={3} className={'d-flex ' + styles.media}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className={styles.instagram}
            >
              <BsInstagram />
            </a>
          </Col>{' '}
          <Col md={6} lg={3} className={'d-flex ' + styles.media}>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer"
              className={styles.pinterest}
            >
              <FaPinterestP />
            </a>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col sm={12} md={6} lg={4} className={'my-3 ' + styles.links}>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact us</a>
            <a href="/returns">Returns</a>
            <a href="/payment">Payment methods</a>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <div className={'my-3 ' + styles.logo_div}>
              <button href="/">F-Step</button>
            </div>
          </Col>
          <Col md={12} lg={4} className={'my-3 ' + styles.links}>
            <h6>Copyright © 2023 "1-2-SHOE" Store. All Rights Reserved</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

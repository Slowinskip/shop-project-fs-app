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
          <Col className={styles.media}>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className={styles.twitter}
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className={styles.facebook}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className={styles.instagram}
            >
              <BsInstagram />
            </a>
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
          <Col className={'col-5'}>2</Col>
          <Col className={'col-2'}>
            <div class={styles.logo_div}>
              <button href="/">F-Step</button>
            </div>
          </Col>
          <Col className={'col-5'}>3</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

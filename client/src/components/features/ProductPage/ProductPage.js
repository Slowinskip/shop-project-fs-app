import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { FaSketch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../config';
import { getProductsById } from '../../../redux/productsRedux';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const [activePhoto, setActivePhoto] = useState('');
  const [productData, setproductData] = useState(false);
  const { id } = useParams();
  const fetchDataRedux = useSelector((state) => getProductsById(state, id));
  useEffect(() => {
    setproductData(fetchDataRedux);
    if (!productData) {
      fetch(API_URL + '/product/' + id).then((res) => {
        if (res.status === 200) {
          return res.json().then((product) => {
            setproductData(product);
          });
        }
      });
    }
  }, []);

  console.log(productData);

  if (!productData) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else
    return (
      <Container className={styles.root}>
        <Row className={'flex-row ' + styles.root}>
          <div className={'col-12 col-lg-6 '}>
            <Col xs={8} md={8} lg={8}>
              <img
                src={`../images/products/${activePhoto || productData.image}`}
                alt="boots"
                className={'d-block ' + styles.left_image}
              />
            </Col>
            <Col xs={12} md={12} lg={12} className="d-flex flex-row">
              {productData.gallery &&
                productData.gallery.map((item) => (
                  <div className={styles.gallery} key={item}>
                    <button
                      className={
                        item.image === activePhoto
                          ? styles.gallery_active
                          : styles.gallery_button
                      }
                      onClick={() => setActivePhoto(item.image)}
                    >
                      <img
                        src={`../images/products/${item.image}`}
                        className={styles.gallery_thumbnail}
                        alt="shoes"
                      />
                    </button>
                  </div>
                ))}
            </Col>
          </div>
          <div className={'col-12 col-lg-6 ' + styles.productInfo}>
            <h1>{productData.name}</h1>
            {productData.oldPrice > 0 ? (
              <span>
                <span className={styles.new_price}>
                  Now ${productData.price}
                </span>
                <span className={styles.old_price}>
                  Was ${productData.oldPrice}
                </span>
              </span>
            ) : (
              <span className={styles.new_price}>${productData.price}</span>
            )}
            <p>{productData.information}</p>
          </div>
        </Row>
      </Container>
    );
};

export default ProductPage;

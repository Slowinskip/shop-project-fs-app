import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';
import { API_URL } from '../../../config';
import { addCart } from '../../../redux/cartRedux';
import { getProductsById } from '../../../redux/productsRedux';
import Quantity from '../../common/Quantity/Quantity';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const [activePhoto, setActivePhoto] = useState('');
  const [productData, setproductData] = useState(false);
  const [status, setStatus] = useState('');
  const [coment, setComent] = useState('');
  const sizeArray = [];
  const [activeSize, setActiveSize] = useState('');
  const [value, setValue] = useState(1);
  const [size, setSize] = useState(null);
  const dispatch = useDispatch();
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

  const changeQuantify = (value) => {
    setValue(value);
  };
  const changeSize = (size) => {
    setSize(size);
    setActiveSize(size);
  };

  const handleAddCart = async () => {
    if (size === null) {
      setStatus('sizeError');
      return;
    }
    const data = { id: shortid(), size, value, productData, coment };
    dispatch(addCart(data));
    console.log(data);
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', '[]');
    }
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(data);
    localStorage.setItem('cart', JSON.stringify(cart));
    setStatus('succes');
  };

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
                  <div className={styles.gallery} key={item.id}>
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
                <span className={styles.new_price}>${productData.price}</span>
                <span className={styles.old_price}>
                  ${productData.oldPrice}
                </span>
              </span>
            ) : (
              <span className={styles.regular_price}>${productData.price}</span>
            )}
            <p>{productData.information}</p>
            <Quantity onClick={changeQuantify} />
            <div className="d-flex flex-row">
              {productData.size.map((size) => (
                <div className={styles.size_buttons} key={size.id}>
                  <button
                    className={
                      size.size === activeSize
                        ? styles.size_active
                        : styles.size_inactive
                    }
                    onClick={() => changeSize(size.size)}
                  >
                    {size.size}
                  </button>
                </div>
              ))}
            </div>
            <div>
              <textarea
                onChange={(e) => setComent(e.target.value)}
                placeholder="Do you want to tell us something to order this product?"
                rows="4"
                cols="50"
              ></textarea>
            </div>
            {status === 'sizeError' && (
              <Alert variant="danger">
                <Alert.Heading>Choose size</Alert.Heading>
              </Alert>
            )}
            {status === 'succes' && (
              <Alert variant="success">
                <Alert.Heading>Add to cart</Alert.Heading>
              </Alert>
            )}

            <Button
              onClick={handleAddCart}
              variant="outline-secondary"
              className={styles.bntAddtoCard}
            >
              Add to Cart
            </Button>
          </div>
        </Row>
      </Container>
    );
};

export default ProductPage;

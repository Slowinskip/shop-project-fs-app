import React, { useEffect, useState } from 'react';
import { Container, Spinner, Col } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Row from 'react-bootstrap/esm/Row';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../config';
import {
  getProducts,
  getProductsMen,
  getProductsWomen,
  updateProducts,
} from '../../../redux/productsRedux';
import ProductBox from '../../common/ProductBox/ProductBox';
import styles from './FeatureProduct.module.scss';

const FeatureProduct = () => {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState();
  const dispatch = useDispatch();
  useEffect(() => fetchData(), []);

  function fetchData() {
    setLoading(true);
    fetch(API_URL + '/product')
      .then((res) => res.json())
      .then((products) => {
        dispatch(updateProducts(products));
        setLoading(false);
      });
  }
  const allProducts = useSelector(getProducts);
  const productsMen = useSelector(getProductsMen);
  const productsWoman = useSelector(getProductsWomen);
  if (isLoading) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else
    return (
      <Row className={styles.root}>
        <Tabs>
          <Col className={'text-center mt-3'}>
            <TabList className={'mt-5 ' + styles.tabList}>
              <Tab className={styles.tab}>All</Tab>
              <Tab className={styles.tab}>Woman</Tab>
              <Tab className={styles.tab}>Men</Tab>
            </TabList>
          </Col>
          <Container className="mt-5">
            <TabPanel>
              {' '}
              <Row xs={1} md={2} lg={4} className="g-3 ">
                {allProducts.map((product) => (
                  <Col key={product.id}>
                    <ProductBox {...product} />
                  </Col>
                ))}
              </Row>
            </TabPanel>
            <TabPanel>
              {' '}
              <Row xs={1} md={2} lg={4} className="g-3 ">
                {productsWoman.map((product) => (
                  <Col key={product.id}>
                    <ProductBox {...product} />
                  </Col>
                ))}
              </Row>
            </TabPanel>
            <TabPanel>
              {' '}
              <Row xs={1} md={2} lg={4} className="g-3 ">
                {productsMen.map((product) => (
                  <Col key={product.id}>
                    <ProductBox {...product} />
                  </Col>
                ))}
              </Row>
            </TabPanel>
          </Container>
        </Tabs>
      </Row>
    );
};

export default FeatureProduct;

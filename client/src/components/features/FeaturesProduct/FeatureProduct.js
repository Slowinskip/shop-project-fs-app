import React, { useEffect, useState } from 'react';
import { Container, Tabs, Tab, Spinner } from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../config';
import {
  getProducts,
  getProductsMen,
  getProductsWomen,
  updateProducts,
} from '../../../redux/productsRedux';
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
        setProducts(products);
        setLoading(false);
      });
  }

  const productsMen = useSelector(getProductsMen);
  const productsWoman = useSelector(getProductsWomen);
  console.log(productsMen);
  console.log(productsWoman);
  if (isLoading) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else
    return (
      <div className={styles.FuturedProductRoot}>
        <Container>
          <Row className="justify-content-center text-center ">
            <h1 className="mt-4">Categories:</h1>
            <Tabs
              defaultActiveKey="all"
              className={'m-3 justify-content-center ' + styles.tabs}
            >
              <Tab eventKey="all" title="All">
                Tab 1 content
              </Tab>
              <Tab eventKey="woman" title="Woman">
                Tab 2 content
              </Tab>
              <Tab eventKey="man" title="Men">
                Tab 3 content
              </Tab>
            </Tabs>
          </Row>
        </Container>
      </div>
    );
};

export default FeatureProduct;

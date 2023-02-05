import React, { useEffect, useState } from 'react';
import { Container, Tabs, Tab, Spinner, Col } from 'react-bootstrap';
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
  console.log(products);
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
              <Tab eventKey="all" title="All" className={styles.tab}>
                <Row xs={1} md={2} lg={4} className="g-3 ">
                  {allProducts.map((product) => (
                    <Col key={product.id}>
                      <ProductBox {...product} />
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="woman" title="Woman">
                <Row xs={1} md={2} lg={4} className="g-3 ">
                  {productsWoman.map((product) => (
                    <Col key={product.id}>
                      <ProductBox {...product} />
                    </Col>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="man" title="Men">
                <Row xs={1} md={2} lg={4} className="g-3 ">
                  {productsMen.map((product) => (
                    <Col key={product.id}>
                      <ProductBox {...product} />
                    </Col>
                  ))}
                </Row>
              </Tab>
            </Tabs>
          </Row>
        </Container>
      </div>
    );
};

export default FeatureProduct;

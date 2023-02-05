import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';
import styles from './FeatureProduct.module.scss';

const FeatureProduct = () => {
  fetch('http://localhost:5000/api/product')
    .then((res) => res.json())
    .then((tables) => console.log(tables));

  return (
    <div className={styles.FuturedProductRoot}>
      <Container>
        <Row className="justify-content-center text-center ">
          <h1 className="mt-4">Categories:</h1>
          <Tabs
            defaultActiveKey={2}
            className={'m-3 justify-content-center ' + styles.tabs}
          >
            <Tab eventKey="all" title="All">
              Tab 1 content
            </Tab>
            <Tab eventKey="woman" title="Woman">
              Tab 2 content
            </Tab>
            <Tab eventKey="man" title="Man">
              Tab 3 content
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default FeatureProduct;

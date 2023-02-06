import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { FaSketch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../config';
import { getProductsById } from '../../../redux/productsRedux';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const [productData, setproductData] = useState(false);
  const { id } = useParams();
  const fetchDataRedux = useSelector((state) => getProductsById(state, id));
  console.log(productData);
  useEffect(() => {
    setproductData(fetchDataRedux);

    if (!productData) {
      const fetchData = async () => {
        await fetch(API_URL + '/product/' + id)
          .then((response) => response.json())
          .then((res) => {
            setproductData(res);
          });
      };
      fetchData();
    }
  }, []);

  if (!productData) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else return <Container></Container>;
};

export default ProductPage;

import React from 'react';
import styles from './FeatureProduct.module.scss';

const FeatureProduct = () => {
  fetch('http://localhost:5000/api/product')
    .then((res) => res.json())
    .then((tables) => console.log(tables));

  return <div>FeatureProduct</div>;
};

export default FeatureProduct;

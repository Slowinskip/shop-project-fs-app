import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Quantity.module.scss';

const Quantity = () => {
  return (
    <div className="d-flex flex-row">
      <h4>Quantity:</h4>
      <div className={'d-flex ' + styles.quantifiDiv}>
        <Button variant="outline-dark">-</Button>
        <input
          type="text"
          min={1}
          max={10}
          value={1}
          readOnly
          className={'text-center ' + styles.input}
        />
        <Button variant="outline-dark">+</Button>
      </div>
    </div>
  );
};

export default Quantity;

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './Quantity.module.scss';

const Quantity = (props) => {
  const [value, setValue] = useState(1);

  const handleQuantifiPlus = () => {
    if (value <= 9) {
      setValue(value + 1);
    }
  };
  const handleQuantifiMinus = () => {
    if (value >= 2) {
      setValue(value - 1);
    }
  };

  useEffect(() => {
    props.onClick(value);
  }, [value]);

  return (
    <div className="d-flex flex-row">
      <h4>Quantity:</h4>
      <div className={'d-flex ' + styles.quantifiDiv}>
        <Button
          onClick={() => {
            handleQuantifiMinus();
          }}
          variant="outline-dark"
        >
          -
        </Button>
        <input
          type="text"
          value={value}
          readOnly
          className={'text-center ' + styles.input}
        />
        <Button
          onClick={() => {
            handleQuantifiPlus();
          }}
          variant="outline-dark"
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Quantity;

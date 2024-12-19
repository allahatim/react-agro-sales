import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="card-footer">
        <span>{product.stock} bags</span>
        <button>New Sale</button>
      </div>
    </div>
  );
};

export default Card;

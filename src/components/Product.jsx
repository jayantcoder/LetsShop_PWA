import React from 'react';

const Product = ({ name, price, img, onClick }) => (
  <div className="product-card border p-4 rounded-lg shadow-md bg-white" onClick={onClick}>
    <img src={img} alt={name} className="h-48 w-full object-cover rounded mb-3" />
    <h3 className="text-lg font-medium text-gray-800">{name}</h3>
    <p className="text-green-600 font-bold">₹{price}</p>
  </div>
);

export default React.memo(Product);
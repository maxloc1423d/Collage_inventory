import React, { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, quantity: parseInt(quantity, 10) });
    setName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Quantity" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItemForm;

import React, { useState, useEffect } from 'react';

const EditItemForm = ({ item, onUpdate }) => {
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setName(item.name);
    setQuantity(item.quantity);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...item, name, quantity: parseInt(quantity, 10) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Item</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditItemForm;

import React from 'react';

const InventoryItem = ({ item, onEdit, onDelete }) => {
  return (
    <li>
      <span>{item.name} - {item.quantity}</span>
      <button onClick={() => onEdit(item)}>Edit</button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
};

export default InventoryItem;

import React from 'react';
import InventoryItem from './InventoryItem';

const InventoryList = ({ items, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {items.map(item => (
          <InventoryItem 
            key={item.id} 
            item={item} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;

import React, { useState } from 'react';
import InventoryList from './components/InventoryList';
import AddItemForm from './components/AddItemForm';
import EditItemForm from './components/EditItemForm';
import Home from './components/Home';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const addItem = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
    setCurrentItem(null);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (item) => {
    setCurrentItem(item);
  };

  const handleSelectDepartment = (departmentId) => {
    setSelectedDepartment(departmentId);
    setCurrentPage('inventory');
  };

  const renderDepartmentName = (departmentId) => {
    switch (departmentId) {
      case 'cs': return 'Computer Science';
      case 'it': return 'Information Technology';
      case 'ee': return 'Electrical Engineering';
      case 'ece': return 'Electronics and Communication Engineering';
      case 'mech': return 'Mechanical Engineering';
      default: return '';
    }
  };
  const renderDepartmentAddmin = (departmentId) => {
    switch (departmentId) {
      case 'cs': return 'Prof.D.G.Harkut';
      case 'it': return 'Prof.Abhijeet Kalbande';
      case 'ee': return 'Electrical Engineering';
      case 'ece': return 'Electronics and Communication Engineering';
      case 'mech': return 'Mechanical Engineering';
      default: return '';
    }
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
      </nav>

      {currentPage === 'home' && <Home onSelectDepartment={handleSelectDepartment} />}

      {currentPage === 'inventory' && (
        <>
          <h1>{renderDepartmentName(selectedDepartment)} Inventory Management</h1>
          <h4>Admin:{renderDepartmentAddmin(selectedDepartment)}</h4>
          <AddItemForm onAdd={addItem} />
          {currentItem && <EditItemForm item={currentItem} onUpdate={updateItem} />}
          <InventoryList items={items} onEdit={editItem} onDelete={deleteItem} />
        </>
      )}
    </div>
  );
};

export default App;

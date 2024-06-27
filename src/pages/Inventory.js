import React, { useState } from 'react';
import useInventory from '../hooks/useInventory';
import InventoryList from '../components/InventoryList';

function Inventory() {
  const { items, addItem } = useInventory();
  const [newItem, setNewItem] = useState({ name: '', quantity: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.quantity) {
      addItem({ name: newItem.name, quantity: parseInt(newItem.quantity) });
      setNewItem({ name: '', quantity: '' });
    }
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="h3 mb-3 fw-normal">Inventario</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar productos por nombre"
        />
      </div>
      <InventoryList items={filteredItems} />
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            value={newItem.name}
            onChange={handleChange}
            placeholder="Nombre del producto"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={newItem.quantity}
            onChange={handleChange}
            placeholder="Cantidad"
          />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Producto</button>
        <div className="d-grid gap-2 d-md-block">
        <a href="/" className="btn btn-primary me-2">Ir al inicio</a>
      </div>
      </form>
    </div>
  );
}

export default Inventory;

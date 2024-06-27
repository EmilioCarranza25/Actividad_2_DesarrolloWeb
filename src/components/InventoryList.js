import React from 'react';

function InventoryList({ items }) {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
          {item.name}
          <span className="badge bg-primary rounded-pill">{item.quantity}</span>
          <span className="badge bg-primary rounded-pill">Price {item.price}</span>
        </li>
      ))}
    </ul>
  );
}

export default InventoryList;

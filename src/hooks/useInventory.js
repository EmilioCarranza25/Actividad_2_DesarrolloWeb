import { useState, useEffect } from 'react';
import inventoryData from '../inventoryData.json';

function useInventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(inventoryData);
  }, []);

  const addItem = (item) => {
    setItems([...items, { ...item, id: items.length + 1 }]);
  };

  return { items, addItem };
}

export default useInventory;
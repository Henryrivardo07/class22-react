import React, { useState } from 'react';
import styles from './stateWithMap.module.scss'
interface Item {
  id: number;
  name: string;
}

export const MapExample: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ]);

  const handleAddItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { id: prevItems.length + 1, name: `New Item ${prevItems.length + 1}` }
    ]);
  };

  return (
    <div className={styles.mapExample}>
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

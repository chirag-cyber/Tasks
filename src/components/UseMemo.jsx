import React, { useState, useMemo } from 'react';

const LargeItemList = () => {
  const [items, setItems] = useState([]);

  const generateItems = () => {
    const newItems = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);
    setItems(newItems);
  };
  const memoizedItems = useMemo(() => items, [items]);

  return (
    <div>
      <h2>Large Item List</h2>
      <button onClick={generateItems}>Generate Items</button>
      <ul>
        {memoizedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default LargeItemList;

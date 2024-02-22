import React, { useReducer, useState } from 'react';

const initialState = {
  items: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
};

const ItemList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      dispatch({ type: 'ADD_ITEM', payload: inputValue });
      setInputValue('');
    }
  };

  const handleRemoveItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };

  return (
    <div>
      <h2>Item List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

import React, { useState } from 'react';

const OnlineStore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const items = [
    { id: 1, name: 'Item 1', price: 10.99 },
    { id: 2, name: 'Item 2', price: 15.99 },
    { id: 3, name: 'Item 3', price: 19.99 },
    { id: 4, name: 'Item 4', price: 12.99 },
    { id: 5, name: 'Item 5', price: 9.99 },
  ];

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="item-cards">
        {filteredItems.map(item => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineStore;
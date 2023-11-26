import React, { useState } from 'react';

function App() {
  const [item, setItem] = useState({ user_id: '', lat: '', lon: '', description: '', image: '', keywords: '' });
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = () => {
    const newItem = { ...item, id: Date.now() };
    setItems([...items, newItem]);
    setItem({ user_id: '', lat: '', lon: '', description: '', image: '', keywords: '' });
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>freecycle</h1>
      <div>
        <input name="user_id" value={item.user_id} onChange={handleInputChange} />
        <input name="lat" value={item.lat} onChange={handleInputChange} />
        <input name="lon" value={item.lon} onChange={handleInputChange} />
        <input name="description" value={item.description} onChange={handleInputChange} />
        <input name="image" value={item.image} onChange={handleInputChange} />
        <input name="keywords" value={item.keywords} onChange={handleInputChange} />
        <button data-action="create_item" onClick={handleSubmit}>Submit</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.description}
            <button data-action="delete" onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

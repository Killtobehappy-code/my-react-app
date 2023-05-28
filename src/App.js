import React, { useState } from 'react';
import './App.css';

function App() {
  const [dolls, setDolls] = useState([
    {
      id: 1,
      name: 'Doll 1',
      image: 'url-to-image-1',
      description: 'Description of Doll 1',
      backstory: 'Backstory of Doll 1',
    },
    {
      id: 2,
      name: 'Doll 2',
      image: 'url-to-image-2',
      description: 'Description of Doll 2',
      backstory: 'Backstory of Doll 2',
    },
    // Add more dolls as needed
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editedDoll, setEditedDoll] = useState({
    id: '',
    name: '',
    image: '',
    description: '',
    backstory: '',
  });

  const [themeColor, setThemeColor] = useState('pastel'); // Default theme color is 'pastel'
  const [menuOpen, setMenuOpen] = useState(false); // Track the state of the menu

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedDoll((prevDoll) => ({ ...prevDoll, [name]: value }));
  };

  const handleAddDoll = () => {
    const newDoll = {
      id: dolls.length + 1,
      ...editedDoll,
    };
    setDolls((prevDolls) => [...prevDolls, newDoll]);
    setEditedDoll({
      id: '',
      name: '',
      image: '',
      description: '',
      backstory: '',
    });
  };

  const handleDeleteDoll = (id) => {
    setDolls((prevDolls) => prevDolls.filter((doll) => doll.id !== id));
  };

  const handleEditDoll = (id) => {
    const dollToEdit = dolls.find((doll) => doll.id === id);
    setEditedDoll({ ...dollToEdit });
    setEditMode(true);
  };

  const handleUpdateDoll = () => {
    setDolls((prevDolls) =>
      prevDolls.map((doll) => (doll.id === editedDoll.id ? editedDoll : doll))
    );
    setEditedDoll({
      id: '',
      name: '',
      image: '',
      description: '',
      backstory: '',
    });
    setEditMode(false);
  };

  const handleThemeChange = (event) => {
    setThemeColor(event.target.value);
  };

  const handleCustomColorChange = (event) => {
    const customColor = event.target.value;
    document.documentElement.style.setProperty('--custom-color', customColor);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`App ${themeColor}-theme`}>
      <div className="menu">
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
        <h1>Virtual Doll Collection</h1>
      </div>
      <div className={`menu-options ${menuOpen ? 'open' : ''}`}>
        <div className="add-doll">
          <h3>Add Doll</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={editedDoll.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={editedDoll.image}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={editedDoll.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="backstory"
            placeholder="Backstory"
            value={editedDoll.backstory}
            onChange={handleInputChange}
          />
          {editMode ? (
            <button onClick={handleUpdateDoll}>Update Doll</button>
          ) : (
            <button onClick={handleAddDoll}>Add Doll</button>
          )}
        </div>
        <div className="theme-options">
          <h3>Theme Color</h3>
          <select id="theme-select" value={themeColor} onChange={handleThemeChange}>
            <option value="pastel">Pastel</option>
            <option value="vibrant">Vibrant</option>
            <option value="monochrome">Monochrome</option>
            <option value="custom">Custom</option>
          </select>
          {themeColor === 'custom' && (
            <input type="color" onChange={handleCustomColorChange} />
          )}
        </div>
      </div>
      <div className="content">
        <div className="dolls-container">
          {dolls.map((doll) => (
            <div key={doll.id} className="doll-card">
              <img src={doll.image} alt={doll.name} />
              <div className="doll-details">
                <h2>{doll.name}</h2>
                <p>{doll.description}</p>
                <p>{doll.backstory}</p>
                <div className={`button-group ${menuOpen ? 'open' : ''}`}>
                  <button onClick={() => handleDeleteDoll(doll.id)}>Delete</button>
                  <button onClick={() => handleEditDoll(doll.id)}>Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
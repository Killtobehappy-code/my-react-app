import React, { useState } from 'react';

function AddDollForm({ onAddDoll }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [backstory, setBackstory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoll = {
      id: Date.now(),
      name,
      image,
      description,
      backstory,
    };

    onAddDoll(newDoll);

    setName('');
    setImage('');
    setDescription('');
    setBackstory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Doll</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="image">Image URL:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <label htmlFor="backstory">Backstory:</label>
      <textarea
        id="backstory"
        value={backstory}
        onChange={(e) => setBackstory(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Doll</button>
    </form>
  );
}

export default AddDollForm;
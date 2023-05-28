import React, { useState } from 'react';

function UpdateDollForm({ doll, onUpdateDoll }) {
  const [name, setName] = useState(doll.name);
  const [image, setImage] = useState(doll.image);
  const [description, setDescription] = useState(doll.description);
  const [backstory, setBackstory] = useState(doll.backstory);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedDoll = {
      ...doll,
      name,
      image,
      description,
      backstory,
    };

    onUpdateDoll(updatedDoll);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Doll</h2>
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
      <button type="submit">Update Doll</button>
    </form>
  );
}

export default UpdateDollForm;
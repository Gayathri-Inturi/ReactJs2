import React, { useState } from 'react';

function NameList() {
  const [names, setNames] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    setNames([...names, name]);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Add Name</button>
      </form>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;

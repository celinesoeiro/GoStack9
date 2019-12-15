import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['reactJS', 'reactNative']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input valeu={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        adicionar
      </button>
    </>
  );
}

export default App;

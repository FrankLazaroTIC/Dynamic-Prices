import React, { useState } from 'react';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Card from './Card';
import Checkbox from './Checkbox'; // Importa el componente Checkbox
import './App.css';

library.add(faEdit, faTrash);

function App() {
  const [isChecked, setIsChecked] = useState(false); // Estado para el checkbox

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const cardElements = [];
  for (let i = 0; i < 10; i++) {
    cardElements.push(<Card key={i} />);
  }

  return (
    <div className="app-container">
      <div className="card-container">
      <Checkbox
          label="Seleccionar"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
    
        {cardElements}
      </div>
    </div>
  );
}

export default App;

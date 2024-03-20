// Card.js
import React, { useState } from 'react';
import Checkbox from './Checkbox';
import './index.css';
import './Card.css';

function Card() {
  const foto = "public/img/pandaReshulon.jpeg";
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="tarjeta">
      <div className='foto'>
        <img
          className="imagen-izquierda"
          src={foto}
          alt="Descripción de la imagen"
        />
      </div>
      <div className="contenido-derecha">
        <h2>Título de la Tarjeta</h2>
        <p>Descripción o contenido de la tarjeta.</p>
        {/* Aquí integras el componente Checkbox */}
        <Checkbox
          label="Seleccionar"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}

export default Card;

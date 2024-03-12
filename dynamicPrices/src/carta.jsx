import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Carta() {
  return (
    <div className="tarjeta">
      <img
        className="imagen-izquierda"
        src="url_de_tu_imagen"
        alt="Descripción de la imagen"
      />
      <div className="contenido-derecha">
        <h2>Título de la Tarjeta</h2>
        <p>Descripción o contenido de la tarjeta.</p>
      </div>
    </div>
  );
}

ReactDOM.render(<Carta />, document.getElementById('root'));

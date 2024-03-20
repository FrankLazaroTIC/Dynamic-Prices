import React from 'react';

function Checkbox(props) {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <label>{props.label}</label>
    </div>
  );
}

export default Checkbox;

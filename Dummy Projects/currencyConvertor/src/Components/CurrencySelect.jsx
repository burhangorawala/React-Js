import React from 'react';


function CurrencySelect({ label, options, value, onChange }) {
  return (
    <div>
      <label>{label}:</label>
      <select value={value} onChange={onChange}
      className='rounded m-1 p-1' 
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelect;

import React from 'react'

function CurrencySelect({label, options, value, onChange}) {

 
  return (
   
     <div>
     <label>{label}</label>
        <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        </select>
     </div>

  
  )
}

export default CurrencySelect;
import React from 'react'

import './styles.scss'

const Select = ({options, onSelect, defaultName}) => {
  return(
    <select className='select' onChange={onSelect}>
      <option value="">{defaultName}</option>
      {options.map(opt => (
        <option
          key={opt.id}
          value={opt.id}
        >
          {opt.name}
        </option>
      ))}
    </select>
  )
}

export default Select


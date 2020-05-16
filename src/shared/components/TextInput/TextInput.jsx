import React from 'react'

import './styles.scss'

const TextInput = (props) => {
  const {
    className,
    value,
    onChange,
    ...restProps
  } = props

  return(
    <input
      className={`input ${className ? className : ''}`}
      type="text"
      value={value}
      onChange={onChange}
      {...restProps}
    />
  )
}

export default TextInput
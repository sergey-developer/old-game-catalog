import React from 'react'

import './styles.scss'

const Spinner = ({size, fullWidth}) => (
  <div className={`spinner-wrapper ${fullWidth ? 'spinner-wrapper--full-width' : ''}`}>
    <span className={`spinner ${size ? `spinner--${size}` : 'spinner--small'}`}/>
  </div>
)

export default Spinner
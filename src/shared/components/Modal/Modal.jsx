import React from 'react'
import {createPortal} from 'react-dom'

import './styles.scss'

const Modal = ({children, isOpen, setOpen}) => {
  if (!isOpen) return null

  const component = (
    <div className="overlay">
      <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={() => setOpen(false)}
        >
          x
        </button>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )

  return createPortal(
    component,
    document.getElementById('modal-root')
  )
}

export default Modal
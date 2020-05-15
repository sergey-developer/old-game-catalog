import React, {useState} from 'react'

import './styles.scss'

const emptyOption =
  <span className='dropdown__option dropdown__option-empty'>
  No options
</span>

const Dropdown = (props) => {
  const {
    title,
    options = [],
    onClick,
    onReverse,
    reversible = false,
    titleWithName,
    keepOpen = false,
    defaultOptionId
  } = props

  const defaultOption = options.find(opt => opt.id === defaultOptionId)
  const [isOpen, setOpen] = useState(false)
  const [shouldReverse, setReverse] = useState(false)
  const [selectedOption, setOption] = useState(defaultOption)

  const handleClickDropdown = () => {
    setOpen(prevState => !prevState)
  }

  const handleClickOption = (option) => {
    setOption(option)

    reversible && setReverse(false)
    !keepOpen && setOpen(false)
    onClick(option)
  }

  const handleClickReverse = (event) => {
    event.stopPropagation()
    setReverse(prevState => !prevState)
    onReverse(!shouldReverse, selectedOption)
  }

  const up = '+'
  const down = '-'
  return (
    // <div className={`dropdown ${titleWithName ? 'dropdown-fluid' : ''}`}>
    <div className='dropdown'>
      <div className='dropdown__button' onClick={handleClickDropdown}>
        <span className='dropdown__title'>
          {title} {titleWithName && selectedOption?.name}
        </span>
        <span className='dropdown__icon'>^</span>
      </div>
      {isOpen &&
        <div className='dropdown__options'>
          {options.length
            ? options.map(opt => {
                const isSelected = opt.id === selectedOption?.id

                return (
                  <div
                    key={opt.id}
                    className={`dropdown__option ${isSelected ? 'dropdown__option-active' : ''}`}
                    onClick={() => handleClickOption(opt)}
                  >
                    <span>{opt.name}</span>
                    {reversible && isSelected &&
                      <span onClick={handleClickReverse}>{shouldReverse ? down : up}</span>
                    }
                  </div>)})
            : emptyOption
          }
        </div>
      }
    </div>
  )
}

export default Dropdown
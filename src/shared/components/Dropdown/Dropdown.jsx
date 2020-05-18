import React, {useState} from 'react'

import './styles.scss'
import Icon from '../Icon'

const emptyOption =
  <span className='dropdown__option dropdown__option-empty'>
  No options
</span>

const Dropdown = (props) => {
  const {
    className,
    title,
    options,
    onClick,
    onReverse,
    onClear,
    reversibleOption,
    titleWithName,
    keepOpen,
    isLoading
  } = props
  const [isOpen, setOpen] = useState(false)
  const [shouldReverse, setReverse] = useState(false)
  const [selectedOption, setOption] = useState({})

  const handleClickDropdown = () => {
    !isLoading && setOpen(prevState => !prevState)
  }

  const handleClickOption = (option) => {
    setOption(option)
    reversibleOption && setReverse(false)
    !keepOpen && setOpen(false)
    onClick(option)
  }

  const handleClickReverse = (event) => {
    event.stopPropagation()
    setReverse(prevState => !prevState)
    onReverse(!shouldReverse, selectedOption)
  }

  const handleClear = (event) => {
    event.stopPropagation()
    setOption({})
    reversibleOption && setReverse(false)
    onClear()
  }

  const renderOptions = () => {
    if (options.length === 0) {
      return emptyOption
    }

    return options.map(option => {
      const isSelected = option.id === selectedOption?.id
      return (
        <div
          key={option.id}
          className={`dropdown__option ${isSelected ? 'dropdown__option--active' : ''}`}
          onClick={() => handleClickOption(option)}
        >
          <span>{option.name}</span>
          {reversibleOption && isSelected &&
            <Icon
              className='dropdown__option-icon'
              name={shouldReverse ? 'arrow-down' : 'arrow-up'}
              onClick={handleClickReverse}
            />
          }
        </div>)
    })
  }

  return (
    <div className={`dropdown ${className ? className : ''}`}>
      <div className='dropdown__button' onClick={handleClickDropdown}>
        <span className='dropdown__title text-dots'>
          {title} {titleWithName && selectedOption?.name}
        </span>
        <Icon
          className='dropdown__button-icon'
          name={isOpen ? 'angle-down' : 'angle-up'}
        />
      </div>
      {isOpen &&
        <div className='dropdown__content'>
          <div className='dropdown__content-header'>
              <span
                className='dropdown__content-button'
                onClick={handleClear}
              >
                Clear
              </span>
          </div>
          <div className='dropdown__options'>
            {renderOptions()}
          </div>
        </div>
      }
    </div>
  )
}

Dropdown.defaultProps = {
  reversibleOption: false,
  keepOpen: false,
  isLoading: false,
  options: []
}

export default Dropdown
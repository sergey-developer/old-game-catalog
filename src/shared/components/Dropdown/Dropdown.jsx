import React, {useState} from 'react'

import './styles.scss'
import ArrowUpIcon from '../Icon/ArrowUpIcon'

const emptyOption =
  <span className='dropdown__option dropdown__option-empty'>
  No options
</span>

const Dropdown = (props) => {
  const {
    className,
    title,
    options = [],
    onClick,
    onReverse,
    onClear,
    reversibleOption = false,
    titleWithName,
    keepOpen = false
  } = props
  const [isOpen, setOpen] = useState(false)
  const [shouldReverse, setReverse] = useState(false)
  const [selectedOption, setOption] = useState(null)

  const handleClickDropdown = () => {
    setOpen(prevState => !prevState)
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
    setOption(null)
    reversibleOption && setReverse(false)
    onClear()
  }

  const up = <ArrowUpIcon/>
  const down = '-'
  return (
    <div className={`dropdown ${className ? className : ''}`}>
      <div className='dropdown__button' onClick={handleClickDropdown}>
        <span className='dropdown__title'>
          {title} {titleWithName && selectedOption?.name}
        </span>
        <span className='dropdown__icon'>^</span>
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
                      {reversibleOption && isSelected &&
                        <i onClick={handleClickReverse}>{shouldReverse ? down : up}</i>
                      }
                    </div>)})
              : emptyOption
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Dropdown
import React, {useState} from 'react'

import './styles.scss'
// fix logic for last, first, next, prev - item
const Slider = (props) => {
  const {
    isOpen,
    setOpen,
    data,
    defaultItem
  } = props
  if (!isOpen) return null
  const [activeItem, setActiveItem] = useState(defaultItem)
  // const isFirstItem = activeItem.index === 0
  // const isLastItem = activeItem.index === data.length - 1

  const handleCloseSlider = (event) => {
    event.stopPropagation()
    setOpen(false)
  }

  const handleClickItem = (event, item, index) => {
    event.stopPropagation()
    setActiveItem(item)
  }

  const selectPrevItem = () => {
    const activeItemIndex = data.findIndex(item => item.id === activeItem.id)
    const prevItem = data[activeItemIndex - 1]
    prevItem && setActiveItem(prevItem)
  }

  const selectNextItem = () => {
    const activeItemIndex = data.findIndex(item => item.id === activeItem.id)
    const nextItem = data[activeItemIndex + 1]
    nextItem && setActiveItem(nextItem)
  }

  return (
    <div className='slider'>
      <div className='slider__content'>
        <div className='slider__header'>
          <div className='slider__controls'>
            <div className='slider__arrows'>
              {<span onClick={selectPrevItem}>left</span>}
              {<span onClick={selectNextItem}>right</span>}
            </div>
            <span
              className='slider__close-button'
              onClick={handleCloseSlider}
            >X</span>
          </div>
        </div>
        <div className='slider__body'>
          <img src={activeItem.image} alt="" className='slider__image-active'/>
        </div>
        <div className='slider__footer' style={{transform: "translate('50px', 0)"}}>
          {data.map((item, index) => {
            const isActive = item.id === activeItem.id
            return <img
              className={`slider__image ${isActive ? 'slider__image--selected' : ''}`}
              key={item.id}
              src={item.image}
              onClick={(event) => handleClickItem(event, item, index)}
              alt=""
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Slider
import React, {useState} from 'react'

import './styles.scss'
import Icon from '../Icon/Icon'
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
  // const callback = (entries, observer) => {
  //   entries.forEach((e, index, arr) => {
  //     const firstElement = arr[0]
  //     console.log(firstElement)
  //   })
  // }
  // const ref = useRef(null);
  // function getObserver() {
  //   if (ref.current === null) {
  //     ref.current = new IntersectionObserver(callback, {
  //       root: document.querySelector('.slider__footer'),
  //       threshold: 0.5
  //     });
  //   }
  //   return ref.current;
  // }
  //
  // useEffect(() => {
  //   const observer = getObserver()
  //   document.querySelectorAll('.slider__image').forEach((element) => {
  //     observer.observe(element)
  //   })
  //   // const target = document.querySelector('img')
  //   // observer.observe(target)
  // }, [])

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

  const activeItemIndex = data.findIndex(item => item.id === activeItem.id)
  return (
    <div className='slider'>
      <div className='slider__content'>
        <div className='slider__header'>
          <div className='slider__controls'>
            <div className='slider__arrows'>
              <Icon name='angle-left' onClick={selectPrevItem}/>
              <Icon name='angle-right' onClick={selectNextItem}/>
            </div>
            <Icon
              className='slider__close-button'
              name='close'
              onClick={handleCloseSlider}
            />
          </div>
        </div>
        <div className='slider__body'>
          <img
            src={activeItem.image}
            className='slider__image-active'
            alt=""
          />
        </div>
        <div className='slider__slides'>
          <div className="slider__slides-wrapper" style={{
            'transform': `translateX(-${activeItemIndex*(150/data.length)}%)`
          }}>
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
    </div>
  )
}

export default Slider
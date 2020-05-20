import React, {useState} from 'react'

import './styles.scss'
import Icon from '../Icon'

const Slider = (props) => {
  const {
    isOpen,
    setOpen,
    slides,
    defaultSlide
  } = props
  if (!isOpen) return null
  const [activeSlide, setActiveSlide] = useState(defaultSlide)
  const [activeIndex, setActiveIndex] = useState(() => slides.findIndex(slide => slide.id === defaultSlide.id))

  const handleCloseSlider = (event) => {
    event.stopPropagation()
    setOpen(false)
  }

  const handleClickSlide = (event, slide, index) => {
    event.stopPropagation()
    setActiveSlide(slide)
    setActiveIndex(index)
  }

  const setPrev = () => {
    const prevIndex = activeIndex - 1
    const prevSlide = slides[prevIndex]
    if (prevSlide) {
      setActiveSlide(prevSlide)
      setActiveIndex(prevIndex)
    }
  }

  const setNext = () => {
    const nextIndex = activeIndex + 1
    const nextSlide = slides[nextIndex]
    if (nextSlide) {
      setActiveSlide(nextSlide)
      setActiveIndex(nextIndex)
    } else {
      const firstSlide = slides[0]
      setActiveSlide(firstSlide)
      setActiveIndex(0)
    }
  }

  return (
    <div className='slider'>
      <div className='slider__content'>
        <div className='slider__header'>
          <div className='slider__controls'>
            <div className='slider__control-buttons'>
              <Icon name='angle-left' onClick={setPrev}/>
              <Icon name='angle-right' onClick={setNext}/>
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
            src={activeSlide.image}
            className='slider__slide--active'
            alt=""
          />
        </div>
        <div className='slider__slides'>
          <div className="slider__slides-wrapper" style={{
            'transform': `translateX(-${activeIndex * (120 / slides.length)}%)`
          }}>
            {slides.map((slide, index) => {
              const isSelected = slide.id === activeSlide.id
              return <img
                className={`slider__slide ${isSelected ? 'slider__slide--selected' : ''}`}
                key={slide.id}
                src={slide.image}
                onClick={(event) => handleClickSlide(event, slide, index)}
                alt=""
              />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

Slider.defaultProps = {
  slides: [],
  defaultSlide: {},
  isOpen: false
}

export default Slider
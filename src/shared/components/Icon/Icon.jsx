import React from 'react'

const ArrowUpIcon = () => (
  <svg width='100%' height='100%' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up"
       className="svg-inline--fa fa-arrow-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 448 512">
    <path fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
  </svg>
)
const ArrowDownIcon = () => (
  <svg width='100%' height='100%' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
       className="svg-inline--fa fa-arrow-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 448 512">
    <path fill="currentColor"
          d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"/>
  </svg>
)
const AngleUpIcon = () => {
  return (
    <svg width='100%' height='100%' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up"
         className="svg-inline--fa fa-angle-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 320 512">
      <path fill="currentColor"
            d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/>
    </svg>
  )
}
const AngleDownIcon = () => {
  return (
    <svg width='100%' height='100%' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down"
         className="svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 320 512">
      <path fill="currentColor"
            d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/>
    </svg>
  )
}
const AngleRightIcon = () => (
  <svg width='100%' height='100%' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
       className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 256 512">
    <path fill="currentColor"
          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/>
  </svg>
)
const AngleLeftIcon = () => (
  <svg width='100%' height='100%' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left"
       className="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 256 512">
    <path fill="currentColor"
          d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/>
  </svg>
)
const CloseIcon = () => (
  <svg width='100%' height='100%' aria-hidden="true" focusable="false" data-prefix="far" data-icon="times-circle"
       className="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 512 512">
    <path fill="currentColor"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/>
  </svg>
)

const icons = {
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon,
  'angle-right': AngleRightIcon,
  'angle-left': AngleLeftIcon,
  'angle-up': AngleUpIcon,
  'angle-down': AngleDownIcon,
  'close': CloseIcon,
}

const Icon = ({className, name, onClick}) => {
  const SVGIcon = icons[name]

  return (
    <i className={`icon ${className ? className : ''}`} onClick={onClick}>
      <SVGIcon/>
    </i>
  )
}

export default Icon
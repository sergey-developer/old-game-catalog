import React from 'react'

const GameListItem = ({name, imgSrc, rating, releaseDate, onClick}) => {
  return(
    <div className='game-list__item' onClick={onClick}>
      <img
        className='game-list__item-image'
        src={imgSrc}
        alt={name}
        loading='lazy'
      />
      <div className='game-list__item-info-block'>
        <div className='game-list__item-info'>
          <h6 className='game-list__item-name text-dots'>{name}</h6>
          <div className='game-list__item-info-footer'>
            <span className='game-list__item-release-date'>
              Release: {releaseDate || 'Unknown'}
            </span>
            <span className='game-list__item-rating'>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameListItem

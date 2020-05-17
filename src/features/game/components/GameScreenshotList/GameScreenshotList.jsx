import React from 'react'

import './styles.scss'
import Spinner from '../../../../shared/components/Spinner/Spinner'

const GameScreenshotList = ({screenshots, onClick, isLoading, error}) => {
  if (isLoading) {
    return <Spinner/>
  }

  const renderScreenshots = () => {
    if (error) return null
    if (screenshots.length === 0) return <div>Game doesn't have screenshots</div>

    return(
      <div className='game-screenshots__list'>
        {screenshots.map(s => (
          <img
            className='game-screenshots__screenshot'
            key={s.id}
            src={s.image}
            alt=""
            onClick={() => onClick(s)}
          />
        ))}
      </div>
    )
  }

  return(
    <div className='game-screenshots__container'>
      <span className='game-screenshots__title'>Screenshots</span>
      {error && <div>Error: {error.message}</div>}
      {renderScreenshots()}
    </div>
  )
}

GameScreenshotList.defaultProps = {
  screenshots: [],
  isLoading: false,
  onClick: () => {}
}

export default GameScreenshotList
import React, {useState} from 'react'

import './styles.scss'
import {useOneGame, useOneGameScreenshots} from '../../features/game/hooks'
import Slider from '../../shared/components/Slider/Slider'
import Spinner from '../../shared/components/Spinner/Spinner'
import GameScreenshotList from '../../features/game/components/GameScreenshotList/GameScreenshotList'

const GamePage = ({match}) => {
  const {slug} = match.params
  const [isOpenSlider, setOpenSlider] = useState(false)
  const [screenshot, setScreenshot] = useState(null)
  const {game, gameIsLoading, gameError} = useOneGame(slug)
  const {screenshots, screenshotsIsLoading, screenshotsError} = useOneGameScreenshots(slug)

  if (gameIsLoading) {
    return <Spinner/>
  }
  if (gameError) {
    return <div>Error: {gameError.message}</div>
  }

  const handleClickScreenshot = (screenshot) => {
    setOpenSlider(true)
    setScreenshot(screenshot)
  }

  return (
    <div className='game-page'>
      <div className='game'>
        <div className='game__about-block'>
          <div className='game__poster'>
            <img
              className='game__poster-image'
              src={game.background_image || game.background_image_additional}
              alt={game.name}
              loading='lazy'
            />
          </div>
          <h6 className='game__name'>
            {game.name}
          </h6>
          <span className='game__release-date'>
            Release date: {game.released}
          </span>
          <div className='game__website'>
            <span>Website: </span>
            <a href={game.website} target='_blank'>
              {game.website}
            </a>
          </div>
          <span className='game__rating'>
            Rating: {game.rating}
          </span>
          <div className='game__description-block'>
            <span className='game__description-title'>Description</span>
            <p className='game__description-text'>{game.description_raw}</p>
          </div>
        </div>
        <GameScreenshotList
          screenshots={screenshots}
          onClick={handleClickScreenshot}
          isLoading={screenshotsIsLoading}
          error={screenshotsError}
        />
        <Slider
          isOpen={isOpenSlider}
          setOpen={setOpenSlider}
          slides={screenshots}
          defaultSlide={screenshot}
        />
      </div>
    </div>
  )
}

export default GamePage
import React from 'react'
import {useOneGame} from '../../features/game/hooks'

import './styles.scss'

import Slaider from '../../shared/components/Slaider/Slaider'
// make go back icon
const GamePage = ({match}) => {
  const {slug} = match.params
  const {game, isLoading, error} = useOneGame(slug)

  if (isLoading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className='game-page'>
      <div className='game'>
        <Slaider/>
        <div className='game__about-block'>
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
          <div className='game__image-block'>
            <img
              src={game.background_image || game.background_image_additional}
              alt={game.name}
              loading='lazy'
              width='100%'
              height='100%'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage
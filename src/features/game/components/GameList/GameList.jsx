import React from 'react'
import {useHistory} from 'react-router-dom'

import './styles.scss'

import GameListItem from './GameListItem'

const GameList = ({games}) => {
  const history = useHistory()

  const onClickItem = (event) => {
    // write loop
    history.push(event.target.parentNode.dataset.slug)
  }

  return (
    <div className='game-list' onClick={onClickItem}>
      {games.map(game => {
        return (
          <GameListItem
            key={game.id}
            name={game.name}
            imgSrc={game.background_image}
            releaseDate={game.released}
            rating={game.rating.toFixed(1)}
            slug={game.slug}
          />
        )
      })}
    </div>
  )
}

export default GameList
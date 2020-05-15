import React from 'react'
import {useHistory} from 'react-router-dom'

import './styles.scss'

import GameListItem from './GameListItem'

const GameList = ({games}) => {
  const history = useHistory()

  const onClickItem = (gameSlug) => {
    history.push(gameSlug)
  }

  return (
    <div className='game-list'>
      {games.map(game => {
        return (
          <GameListItem
            key={game.id}
            name={game.name}
            imgSrc={game.background_image}
            releaseDate={game.released}
            rating={game.rating.toFixed(1)}
            onClick={() => onClickItem(game.slug)}
          />
        )
      })}
    </div>
  )
}

export default GameList
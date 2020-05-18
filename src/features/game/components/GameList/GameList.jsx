import React from 'react'
import {useHistory} from 'react-router-dom'

import './styles.scss'
import GameListItem from './GameListItem'
import Spinner from '../../../../shared/components/Spinner/Spinner'

const GameList = ({games, isLoading}) => {
  const history = useHistory()

  const onClickItem = (gameSlug) => {
    history.push(gameSlug)
  }

  const renderList = () => {
    if (isLoading) {
      return <Spinner/>
    }

    if (!isLoading && games.length === 0) {
      return <div>No result</div>
    }

    return games.map(game => (
      <GameListItem
        key={game.id}
        name={game.name}
        imgSrc={game.background_image}
        releaseDate={game.released}
        rating={game.rating.toFixed(1)}
        onClick={() => onClickItem(game.slug)}
      />
    ))
  }

  return (
    <div className='game-list'>
      {renderList()}
    </div>
  )
}

GameList.defaultProps = {
  games: [],
  isLoading: false
}

export default GameList
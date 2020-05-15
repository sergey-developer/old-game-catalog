import {useEffect} from 'react'

import useRequest from '../../shared/hooks/useRequest'
import GameService from './services/GameService'

const useAllGames = (filter) => {
  const {meta, ...cleanFilter} = filter

  const {
    request,
    response,
    isLoading,
    error,
    setResponse,
    setLoading
  } = useRequest(() => GameService.getAll(cleanFilter))

  useEffect(() => {
    request()
  }, [filter])

  return {
    games: response?.result,
    nextPage: response?.nextPage || null,
    isLoading,
    error,
    setLoading
  }
}

const useOneGame = (gameSlug) => {
  const {
    request,
    response,
    isLoading,
    error
  } = useRequest(() => GameService.getOneBySlug(gameSlug))

  useEffect(() => {
    request()
  }, [])

  return {
    game: response,
    isLoading,
    error
  }
}

export {
  useAllGames,
  useOneGame
}
import {useEffect} from 'react'

import useRequest from '../../shared/hooks/useRequest'
import GameService from './services/GameService'
import GameScreenshotService from './services/GameScreenshotService'

const useAllGames = (filter) => {
  const {meta, ...cleanFilter} = filter
  const {
    request,
    response,
    isLoading,
    error
  } = useRequest(() => GameService.getAll(cleanFilter))

  useEffect(() => {
    request()
  }, [filter])

  return {
    games: response?.result,
    nextPage: response?.nextPage,
    allGamesIsLoading: isLoading,
    allGamesError: error
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
    gameIsLoading: isLoading,
    gameError: error
  }
}

const useOneGameScreenshots = (gameSlug) => {
  const {
    request,
    response,
    isLoading,
    error
  } = useRequest(() => GameScreenshotService.getAllByGameSlug(gameSlug))

  useEffect(() => {
    request()
  }, [])

  return {
    screenshots: response?.result,
    screenshotsIsLoading: isLoading,
    screenshotsError: error
  }
}

export {
  useAllGames,
  useOneGame,
  useOneGameScreenshots
}
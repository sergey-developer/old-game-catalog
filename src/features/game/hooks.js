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
    error,
    setResponse,
    setLoading
  } = useRequest(() => GameService.getAll(cleanFilter))

  useEffect(() => {
    request()
  }, [filter])

  return {
    games: response?.result,
    nextPage: response?.nextPage,
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
    count: response?.count || 0,
    screenshotsIsLoading: isLoading,
    screenshotsError: error
  }
}

export {
  useAllGames,
  useOneGame,
  useOneGameScreenshots
}
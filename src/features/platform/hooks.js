import {useEffect} from 'react'

import useRequest from '../../shared/hooks/useRequest'
import PlatformService from './services/PlatformService'

const useAllPlatforms = () => {
  const {
    request,
    response,
    isLoading,
    error
  } = useRequest(PlatformService.getAll)

  useEffect(() => {
    request()
  }, [])

  return {
    allPlatforms: response?.results,
    allPlatformsIsLoading: isLoading,
    allPlatformsError: error,
  }
}

export {
  useAllPlatforms
}
import {useEffect} from 'react'

import useRequest from '../../shared/hooks/useRequest'
import PlatformService from './services/PlatformService'

const usePlatforms = () => {
  const {
    request,
    response,
    isLoading,
    error,
    setLoading
  } = useRequest(PlatformService.getAll)

  useEffect(() => {
    request()
  }, [])

  return {
    platforms: response?.results || [],
    isLoading,
    error,
    setLoading
  }
}

export {
  usePlatforms
}
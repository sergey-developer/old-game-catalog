import {useState, useCallback} from 'react'

const useRequest = (callback) => {
  const [response, setResponse] = useState()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const request = useCallback(async () => {
    try {
      const response = await callback()
      setResponse(response)
      setError(null)
    } catch (exception) {
      setError(exception)
    } finally {
      setLoading(false)
    }
  }, [callback])

  return {request, response, isLoading, error, setResponse, setLoading}
}

export default useRequest
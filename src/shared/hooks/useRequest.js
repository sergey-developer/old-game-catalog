import {useState, useCallback} from 'react'

const useRequest = (callback) => {
  const [response, setResponse] = useState()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const request = useCallback(async () => {
    // setLoading(true)
    // setError(null)
    try {
      const response = await callback()
      setResponse(response)
    } catch (exception) {
      setError(exception)
    } finally {
      setLoading(false)
    }
  }, [callback])

  return {request, response, isLoading, error, setResponse, setLoading}
}

export default useRequest
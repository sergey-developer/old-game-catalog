import {useState, useEffect} from 'react'

const useInfiniteScroll = (callback) => {
  const [isScrollBottomReached, setScrollBottomReached] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollHeight - document.documentElement.scrollTop !== document.documentElement.clientHeight || isScrollBottomReached) return
      setScrollBottomReached(true)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isScrollBottomReached) return
    callback()
  }, [isScrollBottomReached])

  return {isScrollBottomReached, setScrollBottomReached}
}

export default useInfiniteScroll
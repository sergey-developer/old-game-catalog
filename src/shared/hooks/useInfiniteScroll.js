import {useState, useEffect} from 'react'

const useInfiniteScroll = (callback, limitBeforeScrollEnd) => {
  const [isScrollBottomReached, setScrollBottomReached] = useState(false)
  let timeoutId

  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => { // setTimeout for preventing scroll event triggering twice
        const value = (document.documentElement.scrollHeight - document.documentElement.scrollTop) - document.documentElement.clientHeight
        const isLimitReached = limitBeforeScrollEnd ? value <= limitBeforeScrollEnd : value === 0
        if (!isLimitReached || isScrollBottomReached) return
        setScrollBottomReached(true)
      }, 300)
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
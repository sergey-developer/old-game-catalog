import React, {useEffect, useState} from 'react'
import debounce from 'lodash.debounce'

import './styles.scss'
import GameList from '../../features/game/components/GameList/GameList'
import SearchBar from '../../shared/components/SearchBar/SearchBar'
import Dropdown from '../../shared/components/Dropdown/Dropdown'
import {useAllGames} from '../../features/game/hooks'
import {useAllPlatforms} from '../../features/platform/hooks'
import useInfinityScroll from '../../shared/hooks/useInfinityScroll'
import {makeQueryString} from '../../shared/helpers/url'

const sortOptions = [{id: 'released', name: 'Release date'}, {id: 'rating', name: 'Rate'}]
const initialFilters = {
  page: null,
  search: '',
  platforms: '',
  ordering: '',
  meta: {
    lastFilterName: '',
    lastFilterValue: null
  }
}

const GamesShowcasePage = ({history}) => {
  const [filter, setFilter] = useState(initialFilters)
  const [gameList, setGamesList] = useState([])
  const {games, nextPage, allGamesIsLoading, allGamesError} = useAllGames(filter)
  const {allPlatforms, allPlatformsIsLoading} = useAllPlatforms()
  const {setScrollBottomReached} = useInfinityScroll(handleInfinityScroll, 500)

  useEffect(() => {
    if (games) {
      if (filter.meta.lastFilterName === 'page') {
        setGamesList([...gameList, ...games])
      } else {
        setGamesList(games)
      }
    }
  }, [games])

  useEffect(() => {
    const {meta, ...cleanFilter} = filter
    history.push({search: makeQueryString(cleanFilter)})
  }, [filter])

  if (allGamesError) {
    return <div>Error: {allGamesError.message}</div>
  }

  function handleInfinityScroll() {
    if (nextPage) {
      setFilter({...filter, page: nextPage, meta: {lastFilterName: 'page'}})
      setScrollBottomReached(false)
    }
  }

  const handleChangeFilter = (option, filterName) => {
    if (option.id === filter.meta.lastFilterValue) return

    setGamesList([])
    setFilter({
      ...filter,
      [filterName]: option.id,
      page: null,
      meta: {lastFilterName: filterName, lastFilterValue: option.id}
    })
  }
  const handleSearch = (event) => {
    const value = event.target.value.trim()
    setGamesList([])
    setFilter({
      ...filter,
      search: value,
      page: null,
      meta: {lastFilterName: 'search'}
    })
  }
  const handleReverseSort = (shouldReverse, option) => {
    const filterName = 'ordering'
    let reversedFilterValue
    if (shouldReverse) {
      reversedFilterValue = `-${option.id}`
    } else {
      reversedFilterValue = option.id
    }

    setGamesList([])
    setFilter({
      ...filter,
      [filterName]: reversedFilterValue,
      page: null,
      meta: {lastFilterName: filterName, lastFilterValue: reversedFilterValue}
    })
  }

  const handleClearFilter = (filterName) => {
    if (!!filter[filterName]) {
      setGamesList([])
      setFilter({
        ...filter,
        [filterName]: null,
        meta: {lastFilterName: '', lastFilterValue: null}
      })
    }
  }

  return (
    <div className='games-showcase-page'>
      <SearchBar
        onSearch={debounce(handleSearch, 400)}
        isLoading={allGamesIsLoading}
      >
        <Dropdown
          title='Sort by:'
          titleWithName
          options={sortOptions}
          onClick={(option) => handleChangeFilter(option, 'ordering')}
          reversibleOption
          onReverse={handleReverseSort}
          onClear={() => handleClearFilter('ordering')}
          isLoading={allGamesIsLoading}
        />
        <Dropdown
          title='Platform:'
          titleWithName
          options={allPlatforms}
          onClick={(option) => handleChangeFilter(option, 'platforms')}
          onClear={() => handleClearFilter('platforms')}
          isLoading={allGamesIsLoading || allPlatformsIsLoading}
        />
      </SearchBar>
      <GameList games={gameList} isLoading={allGamesIsLoading}/>
    </div>
  )
}

export default GamesShowcasePage

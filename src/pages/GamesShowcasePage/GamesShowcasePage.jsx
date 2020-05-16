import React, {useEffect, useState} from 'react'
import debounce from 'lodash.debounce'

import './styles.scss'
import GameList from '../../features/game/components/GameList/GameList'
import SearchBar from '../../shared/components/SearchBar/SearchBar'
import Dropdown from '../../shared/components/Dropdown/Dropdown'
import {useAllGames} from '../../features/game/hooks'
import {usePlatforms} from '../../features/platform/hooks'
import useInfinityScroll from '../../shared/hooks/useInfinityScroll'

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
} // if loading prevent reverting by adding spinner in dropdown
// add icon component with styles like in dropdown icon
const GamesShowcasePage = () => {
  const [filter, setFilter] = useState(initialFilters)
  const [gameList, setGamesList] = useState([])
  const {games, gameError, nextPage} = useAllGames(filter)
  const {platforms, platformError} = usePlatforms()
  const {setScrollBottomReached} = useInfinityScroll(debounce(handleInfinityScroll, 400))

  useEffect(() => {
    if (games) {
      if (filter.meta.lastFilterName === 'page') {
        // unique gameList before setting
        // display filters to url
        setGamesList([...gameList, ...games])
      } else {
        setGamesList(games)
      }
    }
  }, [games])

  function handleInfinityScroll() {
    if (nextPage) {
      setFilter({...filter, page: nextPage, meta: {lastFilterName: 'page'}})
      setScrollBottomReached(false)
    }
  }
  // maybe create separated handlers for sorting and filtering
  const handleChangeFilter = (option, filterName) => {
    if (option.id === filter.meta.lastFilterValue) return

    setFilter({
      ...filter,
      [filterName]: option.id,
      page: null,
      meta: {lastFilterName: filterName, lastFilterValue: option.id}
    })
  }
  const handleSearch = (event) => {
    const value = event.target.value.trim()
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

    setFilter({
      ...filter,
      [filterName]: reversedFilterValue,
      page: null,
      meta: {lastFilterName: filterName}
    })
  }

  const handleClearFilter = (filterName) => {
    if (!!filter[filterName]) {
      setFilter({...filter, [filterName]: null})
    }
  }

  return (
    <div className='games-showcase-page'>
      <SearchBar
        onSearch={debounce(handleSearch, 500)}
      >
        <Dropdown
          title='Sort by:'
          titleWithName
          options={sortOptions}
          onClick={(option) => handleChangeFilter(option, 'ordering')}
          reversibleOption
          onReverse={handleReverseSort}
          onClear={() => handleClearFilter('ordering')}
        />
        <Dropdown
          title='Platform:'
          titleWithName
          options={platforms}
          onClick={(option) => handleChangeFilter(option, 'platforms')}
          onClear={() => handleClearFilter('platforms')}
        />
      </SearchBar>
      <GameList games={gameList}/>
    </div>
  )
}

export default GamesShowcasePage

import React, {useState} from 'react'

import './styles.scss'
import TextInput from '../TextInput/TextInput'

const SearchBar = ({onSearch, isLoading, children}) => {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (event) => {
    event.persist()
    setSearchValue(event.target.value)
    onSearch(event)
  }

  return(
    <div className='search-bar'>
      <div className={`search-bar__search-block ${children ? 'search-bar__search-block--margin-bottom' : ''}`}>
        <TextInput
          className='search-bar__input-search'
          value={searchValue}
          onChange={handleChange}
          placeholder='Search'
          name='search'
          disabled={isLoading}
        />
      </div>
      {children &&
        <div className='search-bar__extra-options'>
          {children}
        </div>
      }
    </div>
  )
}

SearchBar.defaultProps = {
  isLoading: false
}

export default SearchBar
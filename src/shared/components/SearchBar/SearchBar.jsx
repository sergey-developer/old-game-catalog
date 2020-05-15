import React, {useState} from 'react'

import './styles.scss'

const SearchBar = ({onSearch, children}) => {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (event) => {
    event.persist()
    setSearchValue(event.target.value)
    onSearch(event)
  }

  return(
    <div className='search-bar'>
      <input
        className='search-bar__input-search'
        type="text"
        placeholder='Search'
        name='search'
        value={searchValue}
        onChange={handleChange}
      />
      {children}
    </div>
  )
}

export default SearchBar
import React from 'react'
import {Link} from 'react-router-dom'

import {MAIN_PAGE_ROUTE} from '../../app/Routes'

const NotFound = () => {
  return (
    <div>
      <span>Page not found</span>
      <br/>
      <Link to={MAIN_PAGE_ROUTE}>Redirect to main page</Link>
    </div>
  )
}

export default NotFound
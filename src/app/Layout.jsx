import React from 'react'

import './Layout.scss'

const Layout = ({children}) => {
  return(
    <>
      <main className='container'>
        {children}
      </main>
    </>
  )
}

export default Layout
import React from 'react'

import './App.scss'

import Routes from './Routes'
import Layout from './Layout'
import ErrorBoundary from '../shared/components/ErrorBoundary'

const App = () => {
  return (
    <div className='app'>
      <ErrorBoundary>
        <Layout>
          <Routes/>
        </Layout>
      </ErrorBoundary>
    </div>
  )
}

export default App
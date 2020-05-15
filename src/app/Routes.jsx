import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NotFound from '../shared/components/NotFound'

const ShowcaseGamesPage = lazy(() => import('../pages/ShowcaseGamesPage/ShowcaseGamesPage'))
const GamePage = lazy(() => import('../pages/GamePage/GamePage'))

const Routes = () => {

  return(
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' exact component={ShowcaseGamesPage}/>
          <Route path='/:slug' exact component={GamePage}/>
          <Route component={NotFound}/>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NotFound from '../shared/components/NotFound'
import Spinner from '../shared/components/Spinner/Spinner'

const ShowcaseGamesPage = lazy(() => import('../pages/GamesShowcasePage/GamesShowcasePage'))
const GamePage = lazy(() => import('../pages/GamePage/GamePage'))

export const MAIN_PAGE_ROUTE = '/'
export const GAME_PAGE_ROUTE = '/game/:slug'

const Routes = () => {
  return(
    <Router>
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route path={MAIN_PAGE_ROUTE} exact component={ShowcaseGamesPage}/>
          <Route path={GAME_PAGE_ROUTE} exact component={GamePage}/>
          <Route component={NotFound}/>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
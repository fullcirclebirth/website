import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'
import About from './About'
import Events from './Events'
import PageNotFound from './PageNotFound'

export default (
  <Switch>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Events" component={Events}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="*" component={PageNotFound}/>
  </Switch>
)
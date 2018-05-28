import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'
import About from './About'
import Services from './Services'
import Resources from './Resources'
import Testimony from './Testimony';
import PageNotFound from './PageNotFound'

export default (
  <Switch>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Services" component={Services}/>
    <Route exact path="/Resources" component={Resources}/>
    <Route exact path="/Testimony" component={Testimony}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="*" component={PageNotFound}/>
  </Switch>
)
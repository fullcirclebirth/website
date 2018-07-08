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
    <Route exact path="/about" component={About}/>
    <Route exact path="/services" component={Services}/>
    <Route exact path="/resources" component={Resources}/>
    <Route exact path="/testimony" component={Testimony}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="*" component={PageNotFound}/>
  </Switch>
)
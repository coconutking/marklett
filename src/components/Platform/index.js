import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Plist from '../Plist'
import Pdetail from '../Pdetail'

// The Roster component matches one of two different routes
// depending on the full pathname
const PLAT = '/roster'
const Roster = () => (
  <Switch>
    <Route exact path="/p" component={Plist} />
    <Route path="/p/:id" component={Pdetail} />
  </Switch>
)


export default Roster

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/css/App.css'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Total from '../containers/Total'
import Show from './Show'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/total" component={Total}/>
      <Route path="/" component={Show}/>
    </Switch>
  </BrowserRouter>
)






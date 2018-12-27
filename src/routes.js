import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './containers/login'
import Singup from './containers/singup'
import Authenticator from './containers/authenticator'
import NotFound from './components/not_found'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Authenticator}/>
      <Route path="/login" component={Login} />
      <Route path="/singup" component={Singup} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
)
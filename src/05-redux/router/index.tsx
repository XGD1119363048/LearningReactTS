import React, { Component } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import Detail from '../views/Detail'

export default class IndexRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/films' component={Films} />
          <Route path='/cinemas' component={Cinemas} />
          <Route path='/center' component={Center} />
          <Route path='/detail/:id' component={Detail} />

          <Redirect from='/' to='/films' />
        </Switch>
      </HashRouter>
    )
  }
}

import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App'
import Index from './components/Index'

export default class extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Index}/>
        </Route>
      </Router>
    )
  }
}

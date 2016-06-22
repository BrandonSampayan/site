import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default class extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Route>
      </Router>
    )
  }
}

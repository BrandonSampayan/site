import 'normalize.css/normalize.css'
import '../styles/index.sass'

import React, { Component } from 'react'
import Navigation from './Navigation'
import { AppEntrance } from '../config/transitions'

export default class extends Component {
  render() {
    return (
      <AppEntrance>
        <Navigation />
        {this.props.children}
      </AppEntrance>
    )
  }
}

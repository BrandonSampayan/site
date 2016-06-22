import 'normalize.css/normalize.css'
import '../styles/index.sass'

import React, { Component } from 'react'
import Header from './Header'
import { AppEntrance } from '../config/transitions'

export default class extends Component {
  render() {
    return (
      <AppEntrance>
        <Header />
        {this.props.children}
      </AppEntrance>
    )
  }
}

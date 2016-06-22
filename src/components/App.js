import 'normalize.css/normalize.css'
import '../styles/index.sass'

import content from '../content/home'
import React, { Component } from 'react'
import Header from './Header'

export default class extends Component {
  render() {
    return (
      <div>
        <Header />
        {content}
        {this.props.children}
      </div>
    )
  }
}

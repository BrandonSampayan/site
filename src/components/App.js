import 'normalize.css/normalize.css'
import '../styles/index.sass'

import React, { Component } from 'react'
import Header from './Header'

export default class extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

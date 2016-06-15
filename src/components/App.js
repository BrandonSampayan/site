import 'normalize.css/normalize.css'
import '../styles/index.sass'

import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  render() {
    var links = [
      { to: `/`, text: `Home`},
      { to: `/About`, text: `About`},
      { to: `/Contact`, text: `Contact`}
    ]

    return (
      <div id="header">
        {links.map(link => {
          return <Link to={link.to} className={window.location.pathname == link.to ? `active` : ``} key={link.to}>{link.text}</Link>
        })}
      </div>
    )
  }
}

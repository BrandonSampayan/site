import React, { Component } from 'react'
import { PageTransition } from '../config/transitions'

export default class extends Component {
  render() {
    return (
      <PageTransition>
        <form method="post" id="contact" action="http://localhost:3000/api/contact/">
          Contact
          <input type="text" placeholder="Your Name" name="name" />
          <input type="text" placeholder="Subject" name="subject" />
          <input type="text" placeholder="Message" name="message" />
          <button type="submit">Submit</button>
        </form>
      </PageTransition>
    )
  }
}

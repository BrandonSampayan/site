import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import Root from './Root'

ReactDOM.render(<Root history={browserHistory} />, document.getElementById(`app`))

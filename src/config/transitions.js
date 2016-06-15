import React from 'react'
import { TransitionMotion, spring } from 'react-motion'

export function PageTransition({ children }) {
  return (
    <TransitionMotion
      willEnter={() => ({x: 0})}
      willLeave={() => ({x: spring(1)})}
      defaultStyles={[{key: `key1`, style: {x: 0}}]}
      styles={[{key: `key1`, style: {x: spring(1)}}]}>
      {values =>
        <div>
          {values.map(({key, style}) =>
            <div
              key={key}
              style={{opacity: style.x}}>
                { children }
              </div>
          )}
        </div>
      }
    </TransitionMotion>
  )
}

export function AppEntrance({ children }) {
  return (
    <TransitionMotion
      willEnter={() => ({x: 0})}
      willLeave={() => ({x: spring(1)})}
      defaultStyles={[{key: `key1`, style: {x: 0}}]}
      styles={[{key: `key1`, style: {x: spring(1)}}]}>
      {values =>
        <div>
          {values.map(({key, style}) =>
            <div
              key={key}
              style={{opacity: style.x}}>
                { children }
              </div>
          )}
        </div>
      }
    </TransitionMotion>
  )
}

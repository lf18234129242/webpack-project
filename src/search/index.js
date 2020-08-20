'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import logo from './images/logo.png'
import { a, b } from './tree-shaking'

if(false) {
  b()
}
class Search extends React.Component {
  render () {
    const funcA = a()
    return <div className="search-text">
      { funcA }Search Text hot 
      <img src = { logo } />
    </div>
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)

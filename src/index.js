import React from 'react'
import { render } from 'react-dom'
import TodoApp from './containers/TodoApp'
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

var data = [
  {id: 1, text: "Do The App", completed: 0},
  {id: 2, text: "Add data", completed: 1},
]

render((<TodoApp data={data}/>), document.getElementById('app'))
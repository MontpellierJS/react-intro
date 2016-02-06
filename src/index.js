import React from 'react'
import { render } from 'react-dom'
import TodoApp from './components/TodoApp'

var data = [
  {id: 1, text: "Do The App", completed: 0},
  {id: 2, text: "Add data", completed: 1},
]

render((<TodoApp data={data}/>), document.getElementById('app'))
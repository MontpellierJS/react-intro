import React from 'react'

import Todo from './Todo'

export default function TodoList(props) {
  return (
    <div className="TodoList">
      <ul>
        {props.data.map(function(todo) {
          return <Todo key={todo.id} completed={todo.completed} text={todo.text} />
        })}
      </ul>
    </div>
  )
}

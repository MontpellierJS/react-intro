import React from 'react'

import TodoList from './TodoList'

export default function TodoApp(props) {
  return (
    <div className="todoApp">
      <TodoList data={props.data}/>
    </div>
  )
}

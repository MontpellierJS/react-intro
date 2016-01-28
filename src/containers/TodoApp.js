import React from 'react'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'

export default function TodoApp(props) {
  return (
    <div className="todoApp">
      <AddTodo 
        onAddClick={function(text) {
          console.log(text)
        }} />
      <TodoList data={props.data}/>
    </div>
  )
}
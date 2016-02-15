import React from 'react'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  render() {
    return (
      <div className="todoApp">
        <AddTodo
        onAddClick={ (text) => {
          let todos = this.state.data
          todos.push({id: Date.now(), text: text, completed: 0})
          this.setState({data: todos})
        }}/>
        <TodoList todos={this.state.data}/>
      </div>
    )    
  }
}

export default TodoApp
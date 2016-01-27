var React = require('react');

var Todo = require('./Todo.js');

function TodoList(props) {
  var data = props.data;
  return (
    <div className="TodoList">
      <ul>
        {data.map(function(todo) {
          return <Todo key={todo.id} completed={todo.completed} text={todo.text} />
        })}
      </ul>
    </div>
  );
}

module.exports = TodoList;
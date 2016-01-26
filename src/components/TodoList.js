var React = require('react');

var Todo = require('./Todo.js');

function TodoList(props) {
  var todoNodes = props.data.map(function(todo) {
    return (
      <Todo completed={todo.completed} text={todo.text} />
    );
  });
  return (
    <div className="TodoList">
      <ul>
        {todoNodes}
      </ul>
    </div>
  );
}

module.exports = TodoList;
var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('./components/TodoApp.js');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
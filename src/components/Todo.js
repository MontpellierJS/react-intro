var React = require('react');


function Todo(props) {
  return (
    <li style={{ 
      textDecoration: props.completed ? 'line-through' : 'none',
      cursor: props.completed ? 'default' : 'pointer'
    }}>
    {props.text}
    </li>
  );
}

module.exports = Todo;
import React from 'react'

export default function Todo(props){
  return (
    <li style={{ 
      textDecoration: props.completed ? 'line-through' : 'none',
      cursor: props.completed ? 'default' : 'pointer'
    }}>
    {props.text}
    </li>
  )
}
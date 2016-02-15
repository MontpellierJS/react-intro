import React from 'react'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  handleClick(e) {
    var node = this.refs.input
    var text = node.value.trim()
    this.state.onAddClick(text)
    node.value = ''
  }

  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={() => {
          this.handleClick()
        }}>
          Add
        </button>
      </div>
    );
  }
}


export default AddTodo
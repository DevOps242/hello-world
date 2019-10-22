import React, { Component } from 'react'
import PropTypes from 'prop-types';



export class TodoItem extends Component {

  getStyle = () => {
    return {
      backGround: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render () {
    const { id, title } = this.props.todo;

    return (

      /* Using inline CSS to change background color*/
      <div style = {this.getStyle()}>
        <p style= { itemStyle }>
        <input type="checkbox" onChange= {this.props.markComplete.bind(this, id)} /> {' '}
          { title }
          <button onClick= {this.props.delTodo.bind(this, id)} style = {btnStyle}> x </button>
        </p>

      </div>

    );
  }
}

//PropTypes
TodoItem.propType = {
  todos : PropTypes.object.isRequired,
  markComplete : PropTypes.func.isRequired,
  delTodo : PropTypes.func.isRequired,
}



// Saving CSS as a const.
const itemStyle = {
  color: '#a4a5f4'
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;

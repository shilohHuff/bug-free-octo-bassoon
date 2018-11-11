import React from 'react'
import PropTypes from 'prop-types'
import './Todo.css'

const Todo = ({ onClick, completed, text, priority = 0 }) => (
  <li
    onClick={onClick}
    className = {determineClassNames(completed, priority).join(' ')}
  >
    {text}
  </li>
)

const determineClassNames = (completed, priority) => {
  let classes = [];
  if( completed ) {classes.push('complete');}
  switch(priority) {
    case 2:
      classes.push('importance-high');
      break;
    case 1:
      classes.push('importance-medium');
      break;
    case 0:
      classes.push('importance-low');
      break;
    default:
      break;
  }
  return classes;
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
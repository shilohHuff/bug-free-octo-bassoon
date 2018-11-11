import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedPriority: 0 };
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
  }

  handlePriorityChange(priorityEvent){
    this.setState({selectedPriority: priorityEvent.target.value});
  }


  render() {
    let input;


    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.dispatch(addTodo(input.value, parseInt(this.state.selectedPriority, 10)))
            input.value = ''
          }}
        >
          <input ref={node => (input = node)} />
          <div>
            <label for="high">High</label>
            <input id="high" name="priority" type="radio" value="2" onChange={this.handlePriorityChange}/>
            <label for="medium">Medium</label>
            <input id="medium" name="priority" type="radio" value="1" onChange={this.handlePriorityChange}/>
            <label for="low">Low</label>
            <input id="low" name="priority" type="radio" value="0" onChange={this.handlePriorityChange}/>
          </div>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo)
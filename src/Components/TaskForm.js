import React, { Component } from 'react';

export class TaskForm extends Component {
	constructor(props) {
  	super(props);
      
    this.state = { todoName: "" }


  	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
  	this.setState({ todoName: e.target.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.todoName);
    this.setState({ todoName: ""});
    }
  

  render() {
    
    return (
      <div className="text-box">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.todoName} onChange ={this.handleChange} placeholder="Add a task" />
          <input type="submit" value="Enter"/>
        </form>
      </div>
    
    )
	}
}
import React, { Component } from 'react';

class TaskForm extends React.Component {
	constructor(props) {
  	super(props);
    
    
  	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
  	console.log('change!');
  }
  
  handleSubmit(e) {
  	console.log ('something was submitted: ' + this.refs.input.value);
    e.preventDefault();
   	this.props.onSubmit(this.refs.input.value);
    }
  render() {
    
    return (
      <div className="text-box">
        <form method="POST" onSubmit={this.handleSubmit}>
          <input type="text" ref="input" onChange ={this.handleChange} placeholder="Add a task" />
          <input type="submit" value="Enter"/>
        </form>
      </div>
    
    )
	}
}
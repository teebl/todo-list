import React, { Component } from 'react';

export class TaskForm extends Component {
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
    this.refs.input.value = "";

    }
  
  //Prevents uneccesary updates. TaskForm never needs a render after mount
  shouldComponentUpdate() {
    return false;
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
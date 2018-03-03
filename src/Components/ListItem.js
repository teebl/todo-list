import React, { Component } from 'react';
import { DeleteButton } from './DeleteButton';
import PriorityButton from './PriorityButton'

export class ListItem extends Component {
	constructor(props) {
		super(props);

	this.checkListener = this.checkListener.bind(this);
	}

	checkListener(e) {
		e.preventDefault;
		this.props.checkTask(this.props.task);
	}


	render() {
		const styleId = (this.props.priority === true) ? "priority" : "";

		return (
			<li  		
      			id={styleId}
      			key={this.props.task}
  			>
			
			<input 
				type="checkbox" 
				checked={this.props.checked} 
				onClick={this.checkListener} 
			/>       
			{this.props.task}
			<DeleteButton 
				name={this.props.task} 
				onSubmit={this.props.deleteTask} />
			<PriorityButton
				name={this.props.task}
				onSubmit={this.props.priorityTask} /> 
			</li>

     
          )
		
	}

}
import React, { Component } from 'react';
import { DeleteButton } from './DeleteButton';

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
		const { connectDragSource, isDragging } = this.props;
		return (
			<li  		
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
			</li>

     
          )
		
	}

}
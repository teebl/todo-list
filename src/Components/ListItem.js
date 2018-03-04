import React, { Component } from 'react';
import { DeleteButton }  from './DeleteButton';
import { PriorityButton } from './PriorityButton';
import  CheckBox  from './CheckBox';
import classNames from 'classnames';

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
		
		//TODO: make a switch to override priority CSS when task checked
		const priorityClass = this.props.priority ? "priority" : "";
		const checkedClass = this.props.checked ? "checked" : "";


		return (
			
			<li  		
      			className={classNames(priorityClass, checkedClass)}
      			key={this.props.task}
  			>
  			<CheckBox
  			check={this.props.checked}
  			checkTask={this.props.checkTask}
  			task={this.props.task}
  			/>
			<div className={"control-group"}>
			<input 
				class="control-checkbox"
				type="checkbox" 
				checked={this.props.checked} 
				onClick={this.checkListener} 
			/>
			</div>    
			<span className={checkedClass}>{this.props.task}</span>
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
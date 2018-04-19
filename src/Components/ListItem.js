import React, { Component } from "react";
import DeleteButton from "./DeleteButton";
import PriorityButton from "./PriorityButton";
import CheckButton from "./CheckButton";
import classNames from "classnames";

export default class ListItem extends Component {
	constructor(props) {
		super(props);

		this.checkListener = this.checkListener.bind(this);
	}

	checkListener(e) {
		e.preventDefault;
		this.props.checkTask(this.props.task);
	}

	//ignore update if no new props
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return !(nextProps.checked === this.props.checked && nextProps.priority === this.props.priority);
	// }

	render() {
		const priorityClass = this.props.priority ? "priority" : "";
		const checkedClass = this.props.checked ? "checked" : "";

		return (
			<li
				className={classNames(priorityClass, checkedClass)}
				key={this.props.task}
			>
				<span className={checkedClass}>{this.props.task}</span>
				<CheckButton
					check={this.props.checked}
					checkTask={this.props.checkTask}
					task={this.props.task}
				/>
				<DeleteButton
					name={this.props.task}
					onSubmit={this.props.deleteTask}
				/>
				<PriorityButton
					name={this.props.task}
					onSubmit={this.props.priorityTask}
				/>
			</li>
		);
	}
}

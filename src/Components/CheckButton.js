import React, { Component } from 'react';
import { FaCheck } from 'react-icons/lib/fa';

export default class CheckButton extends Component {
	constructor(props) {
		super(props)

	this.checkListener = this.checkListener.bind(this);
	}

	checkListener(e) {
		e.preventDefault;
		this.props.checkTask(this.props.task);
	}

	render() {
		return (
			<button onClick={this.checkListener}><FaCheck /></button>
	)
}
}
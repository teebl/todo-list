import React, { Component } from 'react';
import { FaExclamationCircle } from 'react-icons/lib/fa'
export default class PriorityButton extends Component {
  constructor(props) {
    super(props);
    
    this.priorityListener = this.priorityListener.bind(this);
  }
  
  priorityListener(e) {
      console.log('something was prioritized!' + this.props.name);
      this.props.onSubmit(this.props.name);
  }
  
  render() {
    return <button onClick={this.priorityListener}><FaExclamationCircle /></button>
  }
}
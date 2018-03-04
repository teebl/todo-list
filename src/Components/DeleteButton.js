import React, { Component } from 'react';
import { FaClose } from 'react-icons/lib/fa';

export default class DeleteButton extends Component {
  constructor(props) {
    super(props);
    
    this.deleteListener = this.deleteListener.bind(this);
  }
  
  deleteListener(e) {
      this.props.onSubmit(this.props.name);
  }
  
  render() {
    return <button onClick={this.deleteListener}><FaClose /></button>
  }
}
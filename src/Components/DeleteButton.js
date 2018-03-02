import React, { Component } from 'react';

export class DeleteButton extends Component {
  constructor(props) {
    super(props);
    
    this.deleteListener = this.deleteListener.bind(this);
  }
  
  deleteListener(e) {
      console.log('something was deleted!' + this.props.name);
      this.props.onSubmit(this.props.name);
  }
  
  render() {
    return <button onClick={this.deleteListener}>Delete</button>
  }
}
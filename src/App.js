import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DeleteButton} from './Components/DeleteButton.js'

class App extends Component {
constructor(props) {
    super(props);
    
      this.state = {
        tasks : [{
          text: 'Breen my room.',
          done: false
        }, {
          text: 'Take out the garbage.',
          done: false
        }, {
          text: 'Learn React',
          done: true
      }]
        
      };
    
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.checkTask = this.checkTask.bind(this);
}


  //This will recieve a new task from the child and update the state, which in turn updates the parent
  addTask(newTask) {
    console.log('adding ' + newTask);
    
    let taskArray = this.state.tasks;
    
    if (newTask != "") {
      {
   taskArray.unshift({
        text: newTask,
        done:false
    });
    }
    this.setState({
      tasks: taskArray,
});

}
}

  deleteTask(task) {
    
    let taskArray = this.state.tasks;
    
    var index = taskArray.map(t => t.text).indexOf(task);
  
    taskArray.splice(index, 1);
    
    this.setState({task: taskArray });
  }

  checkTask(task) {
  
    let taskArray = this.state.tasks;
    
    var index = taskArray.map(t => t.text).indexOf(task);
  
    taskArray[index].done = !taskArray[index].done;
  
    this.setState({tasks: taskArray});
  
  }
  
  render() {
    const items = this.state;
    const sort = this.props.sort;
    
    return (
      <div className="todo-app">
        <h2>Todo</h2>
        <DeleteButton />
      </div>
    )
  }
}


export default App;

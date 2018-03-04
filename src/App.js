import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import './App.css';
import {TaskForm} from './Components/TaskForm.js'
import {ListItem} from './Components/ListItem'
import FaIconPack from 'react-icons/lib/fa'

class App extends Component {
constructor(props) {
    super(props);
    
      this.state = {
        tasks : [{
          text: 'Clean my room.',
          priority: true,
          done: false

        }, {
          text: 'Take out the garbage.',
          priority: false,
          done: false
        }, {
          text: 'Learn React',
          priority: false,
          done: true
      }]
        
      };
    
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.checkTask = this.checkTask.bind(this);
    this.priorityTask = this.priorityTask.bind(this);

}


  //This will recieve a new task from the child and update the state, which in turn updates the parent
  addTask(newTask) {
    console.log('adding ' + newTask);
    
    let taskArray = this.state.tasks;
    
    if (newTask !== "") {
      {
   taskArray.push({
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
    
    let index = taskArray.map(t => t.text).indexOf(task);
  
    taskArray[index].done = !taskArray[index].done;
  
    this.setState({tasks: taskArray});
  
  }

  priorityTask(task) {

    let taskArray = this.state.tasks;
    let index = taskArray.map(t => t.text).indexOf(task);
    let priorityIndex = taskArray.map(t => t.priority).indexOf(false)
    console.log('priorityIndex is ' + priorityIndex);
    //change value of priority
    taskArray[index].priority = !(taskArray[index].priority);

    //place task before first non-priority task if now priority, if not, put after
    //if no non-priority tasks, put at end of list
    if (priorityIndex === -1) {
      
      taskArray.splice(taskArray.length, 0, taskArray.splice(index, 1)[0]);

    } else if (taskArray[index].priority === true) {
      
      taskArray.splice(priorityIndex, 0, taskArray.splice(index, 1)[0]);

    } else {

      taskArray.splice((priorityIndex-1), 0, taskArray.splice(index, 1)[0])
    }
    

    this.setState({tasks: taskArray});


  }
  
  render() {
    const items = this.state;
    const sort = this.props.sort;
    
    return (
      <div className="todo-app">
        <div className="header">
          <h2>Todo</h2>
          <span>
          <TaskForm onSubmit={this.addTask} />
          </span>
        </div>
        <ul>
        {this.state.tasks.map(item => {
          return (
            
            <ListItem 
              task={item.text} 
              checked={item.done}
              priority= {item.priority} 
              checkTask={this.checkTask} 
              deleteTask={this.deleteTask}
              priorityTask={this.priorityTask} 
            />
          )
        })}
        </ul>
      </div>
    )}
}

export default App;

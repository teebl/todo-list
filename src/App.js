import React, { Component } from 'react';
import {TaskForm} from './Components/TaskForm.js';
import ListItem from './Components/ListItem';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
      this.state = {
        tasks : [{
          text: 'Clean my room',
          priority: true,
          done: false

        }, {
          text: 'Take out the garbage',
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
    
    let taskArray = this.state.tasks;
    
    if (newTask !== "") {
      
      taskArray.push({
        text: newTask,
        done:false
      });
      
    this.setState({tasks: taskArray});

    }
  }

  //Finds index of task, then splices into temporary array, setstates temporary array
  deleteTask(task) {
    
    let taskArray = this.state.tasks;
    var index = taskArray.map(t => t.text).indexOf(task);
  
    taskArray.splice(index, 1);
    
    this.setState({tasks: taskArray});
  }

  //Finds index of task, flips the bool of task's done element, and setStates the temporary array
  checkTask(task) {
  
    let taskArray = this.state.tasks;
    
    let index = taskArray.map(t => t.text).indexOf(task);
  
    taskArray[index].done = !taskArray[index].done;
  
    this.setState({tasks: taskArray});
  
  }

  //Finds the index of task, ignoring completed tasks
  //Will either move up or down the list depending on whether or not the task was marked as a priority
  priorityTask(task) {
    
    
    let taskArray = this.state.tasks;
    let index = taskArray.map(t => t.text).indexOf(task);
    let priorityIndex = taskArray.map(t => t.priority).indexOf(false)
      
    //ignore if task marked as done
    if (taskArray[index].done === false) {
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
  }

  componentDidMount() {
    //If the tasks needed to be fetched from a database, this is where it would happen

  }

  render() {
    return (
      
      <div 
        className="todo-app">
        <div 
          className="header">
          <h1>Todo</h1>
          <TaskForm 
            onSubmit={this.addTask} />
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

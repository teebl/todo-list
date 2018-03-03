import React, { Component } from 'react';
import './App.css';
import {TaskForm} from './Components/TaskForm.js'
import {ListItem} from './Components/ListItem'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';



class App extends Component {
constructor(props) {
    super(props);
    
      this.state = {
        tasks : [{
          text: 'Clean my room.',
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
    this.moveTask = this.moveTask.bind(this);

}

//This is for dragging  
moveTask(dragTask, hoverTask) {
    let taskArray = this.state.tasks;
    let dragIndex = taskArray.map(t => t.text).indexOf(dragTask);
    let hoverIndex = taskArray.map(t => t.text).indexOf(hoverTask);

    //for now just adds before hovered element, but would like to change that
    taskArray.splice(hoverIndex, 0, dragTask);

    //then deletes task at old location
    taskArray.splice(dragIndex, 1);


  }


  //This will recieve a new task from the child and update the state, which in turn updates the parent
  addTask(newTask) {
    console.log('adding ' + newTask);
    
    let taskArray = this.state.tasks;
    

    if (newTask !== "") {
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
    
    let index = taskArray.map(t => t.text).indexOf(task);
  
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
        <TaskForm onSubmit={this.addTask} />
        <ul onDragOver={this.dragOver}>
        {this.state.tasks.map(item => {
          return (
            
            <ListItemWrapped
              task={item.text} 
              checked={item.done} 
              checkTask={this.checkTask} 
              deleteTask={this.deleteTask}
              moveTask={this.moveTask} 
            />
          )
        })}
        </ul>
      </div>
    )}
}

export default DragDropContext(HTML5Backend)(App);

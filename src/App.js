import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [{
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

        if (newTask !== "") {
            
            taskArray.unshift({
                text: newTask,
                done: false
            });
        }
        this.setState({
            tasks: taskArray,
        });

    }


deleteTask(task) {

    let taskArray = this.state.tasks;

    var index = taskArray.map(t => t.text).indexOf(task);

    taskArray.splice(index, 1);

    this.setState({
        task: taskArray
    });
}

checkTask(task) {

    let taskArray = this.state.tasks;

    var index = taskArray.map(t => t.text).indexOf(task);

    taskArray[index].done = !taskArray[index].done;

    this.setState({
        tasks: taskArray
    });

}

render() {
    const items = this.state;

    return ( <
        div className = "todo-app" >
        <
        h2 > Todo < /h2>

        <
        TaskForm onSubmit = {
            this.addTask
        }
        />


        { /*  this ought to have its own component (or stateless function) */ } {
            items.tasks.map(item => {
                return ( <
                    li key = {
                        item.text
                    } >
                    <
                    input type = "checkbox"
                    checked = {
                        item.done
                    }
                    onChange = {
                        () => this.checkTask(item.text)
                    }
                    /> {
                        item.text
                    } <
                    DeleteButton name = {
                        item.text
                    }
                    onSubmit = {
                        this.deleteTask
                    }
                    /> <
                    /li> 

                )
            })
        } <
        /div>
    )
}


class TaskForm extends React.Component {
    constructor(props) {
        super(props);


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log('change!');
    }

    handleSubmit(e) {
        console.log('something was submitted: ' + this.refs.input.value);
        e.preventDefault();
        this.props.onSubmit(this.refs.input.value);
    }
    render() {

        return ( <
            div className = "text-box" >
            <
            form method = "POST"
            onSubmit = {
                this.handleSubmit
            } >
            <
            input type = "text"
            ref = "input"
            onChange = {
                this.handleChange
            }
            placeholder = "Add a task" / >
            <
            input type = "submit"
            value = "Enter" / >
            <
            /form> <
            /div>

        )
    }
}

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);

        this.deleteListener = this.deleteListener.bind(this);
    }

    deleteListener(e) {
        console.log('something was deleted!' + this.props.name);
        this.props.onSubmit(this.props.name);
    }

    render() {
        return <button onClick = {
            this.deleteListener
        } > Delete < /button>
    }
}
export default App;

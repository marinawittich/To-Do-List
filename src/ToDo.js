import { Component } from "react";
import Icon from './icon.png'

export class ToDoList extends Component{
    state={
        userInput: '',
        list: []
    }

    handleInput(e){
        this.setState({userInput: e});
        console.log(e);
    }

    addTask(task){
        if (task === ''){
            alert("Please enter a task")
        } else {
            let newTask = this.state.list;
            newTask.push(task);
            this.setState({list: newTask, userInput: ''})
            console.log(newTask);
        }
    }
    

    crossedTask(event){
        const crossedLine = event.target;
        crossedLine.classList.toggle('crossed');
    }

    deleteTask(){
        let deleteitem = this.state.list;
        deleteitem = [];
        this.setState({list: deleteitem})

    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <div className="container">
                <input type="text"
                placeholder="Enter your task..."
                onChange={(e) => {this.handleInput(e.target.value)}}
                value={this.state.userInput}
                />
                <div/>
                
                
                
            </div>
           <div className="container">
           <button className="add" onClick = {() => this.addTask(this.state.userInput)}>Add Task</button>                  
            <button className="delete" onClick = {() => this.deleteTask()}>Delete</button>
           </div>
            <ul >
                {this.state.list.map((item, index) => (
                    <li className="container" onClick={this.crossedTask} key={index}><img src={Icon} width="20px" alt="icon"/> {item}</li>
                ))}
                
            </ul>
            </div>
            </form>
        )
    }
}
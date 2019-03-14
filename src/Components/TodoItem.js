// * TODO

// * OPTIONAL
// Add animations for deleting and completing todos

import React, { Component } from 'react';
import './TodoItem.css';
import {
    ListGroupItem,
} from 'reactstrap';
import { 
    Link
} from 'react-router-dom';

class TodoItem extends Component {
    state = {
        taskComplete: this.props.task.completed,
        deleted: false
    }

    handleCompleteTask = () => {
        this.setState({ taskComplete: !this.props.task.completed });
        this.props.completeTodo(this.props.task);
    }

    handleDeleteTask = () => {
        this.setState({ deleted: true });
        this.props.deleteTodo(this.props.task.id);
    }

    render() {
        return (
            <ListGroupItem className={!this.state.deleted ? "todoList--items" : "todoList--items__deleted"}>
                <Link to={{
                    pathname: "/view_todo",
                    state: this.props.task
                }} className={this.state.taskComplete ? "todoList--items__completed" : ""}>{this.props.task.taskName}</Link>
                <div className="todoList--icons">
                    <i title="Mark task complete" className="far fa-check-square todoList--icons--check" onClick={this.handleCompleteTask}/>
                    <i title="Delete task" className="fas fa-trash todoList--icons--trash" onClick={this.handleDeleteTask}/>
                </div>
            </ListGroupItem>
        )
    }
}

export default TodoItem;
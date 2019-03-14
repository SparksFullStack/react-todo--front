// * TODO
// Dispatch actions for completing and deleting todos

import React, { Component } from 'react';
import './TodoItem.css';
import {
    ListGroupItem,
    Button
} from 'reactstrap';

class TodoItem extends Component {
    state = {
        taskComplete: this.props.task.completed,
    }

    handleCompleteTask = () => {
        this.setState({ taskComplete: !this.props.task.completed });
        this.props.completeTodo(this.props.task);
    }

    render() {
        return (
            <ListGroupItem className="todoList--items">
                <p className={this.state.taskComplete ? "todoList--items__completed" : ""}>{this.props.task.taskName}</p>
                {/* <div className="todoList--items--button-container">
                    <Button outline className="todoList--items--buttons" color="success">Complete</Button>
                    <Button outline className="todoList--items--buttons" color="primary">View</Button>
                </div> */}
                <div className="todoList--icons">
                    <i className="far fa-check-square todoList--icons--check" onClick={this.handleCompleteTask}/>
                    <i className="fas fa-trash todoList--icons--trash" />
                </div>
            </ListGroupItem>
        )
    }
}

export default TodoItem;
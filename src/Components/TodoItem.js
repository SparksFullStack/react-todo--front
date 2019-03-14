// * TODO
// Dispatch actions for deleting todos
// 

import React, { Component } from 'react';
import './TodoItem.css';
import {
    ListGroupItem,
    Button
} from 'reactstrap';

import { connect } from 'react-redux';

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
                <p className={this.state.taskComplete ? "todoList--items__completed" : ""}>{this.props.task.taskName}</p>
                {/* <div className="todoList--items--button-container">
                    <Button outline className="todoList--items--buttons" color="success">Complete</Button>
                    <Button outline className="todoList--items--buttons" color="primary">View</Button>
                </div> */}
                <div className="todoList--icons">
                    <i className="far fa-check-square todoList--icons--check" onClick={this.handleCompleteTask}/>
                    <i className="fas fa-trash todoList--icons--trash" onClick={this.handleDeleteTask}/>
                </div>
            </ListGroupItem>
        )
    }
}

export default TodoItem;
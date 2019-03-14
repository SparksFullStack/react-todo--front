import React from 'react';
import './TodoItem.css';
import {
    ListGroupItem,
    Button
} from 'reactstrap';

export default (props) => {
    return (
        <ListGroupItem className="todoList--items">
            <p>{props.task.taskName}</p>
            <div className="todoList--items--button-container">
                <Button outline className="todoList--items--buttons" color="success">Complete</Button>
                <Button outline className="todoList--items--buttons" color="primary">View</Button>
            </div>
        </ListGroupItem>
    )
}
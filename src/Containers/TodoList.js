// * TODO
// Make todo items hyperlinks

// * Optional
// Add icons to todo items

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './TodoList.css';
import { 
    COMPLETE_TODO,
    DELETE_TODO,
 } from '../Store/actions';

import {
    Card, 
    CardBody,
    CardTitle,
    Button,
    ListGroup,
    ListGroupItem,
    Row,
    Breadcrumb, 
    BreadcrumbItem,
} from 'reactstrap';

import TodoItem from '../Components/TodoItem.js';

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    renderTodos = () => {
        return this.props.todoList.map((task, index) => {
            return <TodoItem 
                        task={task}     
                        key={index} 
                        completeTodo={this.props.completeTodo} 
                        deleteTodo={this.props.deleteTodo}
                    />
        })
    }

    render() {
        return (
            <section className="todoList">
                <Card className="todoList--card">
                    <CardBody className="todoList--cardBody">
                        <CardTitle>My To-Do's</CardTitle>
                        <hr />
                        <ListGroup className="todoList--list">
                            {this.renderTodos()}
                        </ListGroup>
                        <hr />
                        <Link to="/add_todo" className="btn btn-success todoList--button" color="success">Add new task</Link>
                    </CardBody>
                </Card>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        completeTodo: (task) => dispatch({ type: COMPLETE_TODO, payload: task }),
        deleteTodo: (taskID) => dispatch({ type:DELETE_TODO, payload: taskID }), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
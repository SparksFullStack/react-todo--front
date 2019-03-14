// * TODO
// Make todo items hyperlinks

// * Optional
// Add icons to todo items

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './TodoList.css';

import {
    Card, 
    CardBody,
    CardTitle,
    Button,
    ListGroup,
    ListGroupItem,
    Row
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
            return <TodoItem task={task} key={index} />
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

export default connect(mapStateToProps)(TodoList);